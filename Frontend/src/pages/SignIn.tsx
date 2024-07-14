import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setUser } from '../slice/userSlice';
import { handleSignIn } from '../services/service';

/**
 *Connecter son email et password
 */
const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Gère la soumission du formulaire de connexion.
   * Effectue la requête de connexion et met à jour l'état de connexion de l'utilisateur.
   * Stocke le token et les informations utilisateur en session storage en cas de succès.
   * @param {FormEvent<HTMLFormElement>} event - Événement de soumission du formulaire.
   */
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const responseData = await handleSignIn(email, password);
      dispatch(
        setUser({
          email,
          password,
          token: responseData.token,
          firstName: responseData.user.firstName,
          lastName: responseData.user.lastName,
        })
      );

      // Stockage du token et des informations utilisateur dans sessionStorage
      sessionStorage.setItem('token', responseData.token);
      sessionStorage.setItem('firstName', responseData.user.firstName);
      sessionStorage.setItem('lastName', responseData.user.lastName);

      setIsLoggedIn(true);
      navigate('/profil');
    } catch (error) {
      console.error('Erreur de connexion:', (error as Error).message);
      setErrorMessage((error as Error).message);
    }
  };

  /**
   * Gère la déconnexion de l'utilisateur.
   * Nettoie les données de session et redirige l'utilisateur vers la page d'accueil.
   */
  const handleLogout = () => {
    // Nettoyage des données de session
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('lastName');

    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} email={email} password={password} />
      <div className="bg-[#12022B] min-h-screen flex items-start justify-center pt-12">
        <div className="bg-white py-8 rounded shadow-md px-12">
          <FaUserCircle className="mx-auto my-4" size={50} />
          <h2 className="text-2xl font-bold mb-4 text-center">Se connecter</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Entrez votre adresse email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="Entrez votre mot de passe"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Se souvenir de moi</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="underline bg-[#02BC77] hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
              >
                Se connecter
              </button>
            </div>
            {errorMessage && <div className="mt-4 text-red-500 text-center">{errorMessage}</div>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;

import  { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/argentBankLogo.png';
import { FaUserCircle } from 'react-icons/fa';
import { handleSignIn } from '../services/service';
import { PiSignOutBold } from "react-icons/pi";

/**
 * Propriétés du composant Navbar.
 */
interface NavbarProps {
  isLoggedIn: boolean; 
  onLogout: () => void; 
  email: string;
  password: string; 
}

/**
 * Composant Navbar affichant les liens de navigation et les informations utilisateur.
 * @param {NavbarProps} props - Propriétés du composant.
 * @returns {JSX.Element} Composant Navbar.
 */
const Navbar = ({ isLoggedIn, onLogout, email, password }: NavbarProps): JSX.Element => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Connecte l'utilisateur en utilisant l'email et le mot de passe fournis.
     * Récupère les détails de l'utilisateur lors de la connexion réussie.
     */
    const signIn = async () => {
      try {
        const responseData = await handleSignIn(email, password);
        setFirstName(responseData.user.firstName);
        firstName
      } catch (error) {
        console.error('Erreur de connexion :', error);
      }
    };

    if (email && password) {
      signIn();
    }
  }, [email, password]);

  /**
   * Gère l'action de déconnexion de l'utilisateur.
   * Déconnecte l'utilisateur et navigue vers la page d'accueil.
   */
  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="relative z-20 bg-white">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <NavLink to="/">
          <img src={Logo} alt="Logo d'Argent Bank" className="w-48" />
        </NavLink>
        {isLoggedIn ? (
          <NavLink to="/" className="flex items-center">
            <div className="flex items-center ">
              <FaUserCircle className="mr-1 text-black" />
              <p className="mr-4 text-black"> {email} </p>
              <PiSignOutBold/>
              <p className="ml-1 hover:underline cursor-pointer" onClick={handleLogout}>
                Sign out
              </p>
            </div>
          </NavLink>
        ) : (
          <NavLink to="/login" className="flex items-center">
            <div className="flex items-center">
              <FaUserCircle /> <p className="ml-1 hover:underline cursor-pointer">Sign in</p>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

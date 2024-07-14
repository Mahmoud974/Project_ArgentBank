import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/v1';

/**
 * Effectue l'authentification de l'utilisateur en utilisant l'API backend.
 * @param {string} email - L'adresse email de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 * @returns {Promise<{ token: string, user: { firstName: string, lastName: string } }>} Les informations de connexion, y compris le token et les détails de l'utilisateur.
 * @throws {Error} Erreur si la requête échoue.
 */
export const handleSignIn = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/login`, {
            email,
            password
        });
        const { token, user } = response.data.body;
        return { token, user };
    } catch (error) {
        throw error;
    }
};

/**
 * Met à jour le profil utilisateur en utilisant l'API backend.
 * @param {string} token - Le token d'authentification de l'utilisateur.
 * @param {string} firstName - Le nouveau prénom de l'utilisateur.
 * @param {string} lastName - Le nouveau nom de famille de l'utilisateur.
 * @returns {Promise<any>} Réponse de l'API après la mise à jour du profil.
 * @throws {Error} Erreur si la requête échoue.
 */
export const updateUserProfile = async (token: string, firstName: string, lastName: string) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user/profile`, {
            firstName,
            lastName
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

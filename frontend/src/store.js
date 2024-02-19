import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            // Il est préférable de convertir la valeur stockée (string) en booléen
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
            user: null, // Initialiser à null
        };
    },
    mutations: {
        // Cette mutation met à jour l'état de connexion et le stocke également dans localStorage
        setLoggedIn(state, status) {
            state.isLoggedIn = status;
            localStorage.setItem('isLoggedIn', status);
        },
        // Cette mutation met à jour les données de l'utilisateur
        setUserData(state, userData) {
            console.log("Mise à jour des données utilisateur", userData);
            state.user = userData;
            // Stocker les données de l'utilisateur dans localStorage pour une persistance entre les sessions
            if (userData) {
                localStorage.setItem('userData', JSON.stringify(userData));
            } else {
                localStorage.removeItem('userData');
            }
        },
    },
    actions: {
        // Cette action est utilisée pour initialiser l'utilisateur au démarrage de l'application
        initializeUser({ commit }) {
            const userData = localStorage.getItem('userData');
            if (userData) {
                commit('setUserData', JSON.parse(userData));
                commit('setLoggedIn', true); // Assurez-vous que isLoggedIn est également défini
            }
        },
        // Cette action peut être utilisée pour déconnecter l'utilisateur
        logout({ commit }) {
            commit('setUserData', null);
            commit('setLoggedIn', false);
        }
    }
});

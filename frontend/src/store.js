import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            isLoggedIn: localStorage.getItem('isLoggedIn') || false
        };
    },
    mutations: {
        setLoggedIn(state, status) {
            state.isLoggedIn = status;
        }
    }
});

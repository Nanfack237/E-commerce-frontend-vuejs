import { createStore } from "vuex";
import router from './router';

export default createStore({
    state: { // toy
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations: { // button
        LOGIN(state){
            state.isLoggedIn = true // ON
        },   
        LOGOUT(state){
            state.isLoggedIn = false // OFF
        }
    },

    actions: {
        login({ commit }){
            commit('LOGIN')
        },
        logout({ commit, dispatch }){
            commit('LOGOUT')
            dispatch('navigateToLogin')
        },
        navigateToLogin(){
            router.push({name: 'Login'});
        }
    }
})
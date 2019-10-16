import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: ''
    },
    mutations: {
        pasarUsuario(state, usuario) {
            state.user = usuario;
            console.log(usuario);
        }
    },
    actions: {
        getUser({ commit }, usuario) {
            commit('pasarUsuario', usuario);
        }
    }
});
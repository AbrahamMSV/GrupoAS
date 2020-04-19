import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      count: 0,
      user: '',
      privilegio: 0
    },
    getters:{
        
    },
    mutations: {
      logOut (state) {
        localStorage.removeItem("usuario")
        localStorage.removeItem("privilegio")
      }
    },
    actions: {

    }
  })
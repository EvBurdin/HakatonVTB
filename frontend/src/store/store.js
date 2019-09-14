import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curentUser: '',
    users: [{ name: 'qwe' }, { name: 'asd' }, { name: 'qaz' }],
  },

  getters: {},

  mutations: {
    SET_USER: (state, data) => {
      state.curentUser = data;
    },
  },

  actions: {
    logout(context) {
      axios
        .post('http://localhost:3000/api/logout/', {}, { withCredentials: true })
        .then(context.commit('SET_USER', ''));
    },
  },
});

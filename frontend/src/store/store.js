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
    set_user: (state, data) => {
      state.curentUser = data;
    },
    set_users: (state, data) => {
      state.users = data;
    },
  },

  actions: {
    logout(context) {
      axios.post('/api/logout/', {}, { withCredentials: true }).then(context.commit('set_user', ''));
    },
    getCurrentUser(context) {
      axios.get('api/user').then(res => context.commit('set_user', res.data));
    },
    getUsers(context) {
      axios.get('api/users').then(res => context.commit('set_users', res.data));
    },
  },
});

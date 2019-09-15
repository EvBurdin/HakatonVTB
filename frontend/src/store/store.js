import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import router from 'vue-router';

Vue.use(Vuex);
Vue.use(router);

export default new Vuex.Store({
  state: {
    curentUser: '',
    users: [],
    userPolls: [],
  },

  getters: {},

  mutations: {
    set_user: (state, data) => {
      state.curentUser = data;
    },
    set_users: (state, data) => {
      state.users = data;
    },
    set_userPolls: (state, data) => {
      state.userPols = data;
    },
  },

  actions: {
    logout(context) {
      axios.post('/api/logout/', {}, { withCredentials: true }).then(context.commit('set_user', ''));
    },
    async getCurrentUser(context) {
      const curUser = await axios.get('api/user');
      context.commit('set_user', curUser.data);
    },
    async getUsers(context) {
      const users = await axios.get('api/users');
      context.commit('set_users', users.data);
    },
    async getUserPols(context) {
      const pols = await axios.get(`/api/userpolls/${context.state.curentUser._id}`);
      context.commit('set_userPolls', pols.data);
    },
  },
});

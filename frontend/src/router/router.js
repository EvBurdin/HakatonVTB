import Vue from 'vue';
import Router from 'vue-router';
import registration from '../components/registration';
import login from '../components/login';
import pollAdd from '../components/pollAdd';
import test from '../components/test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test,
    },
    {
      path: '/reg',
      name: 'registration',
      component: registration,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/new',
      name: 'pollAdd',
      component: pollAdd,
    },
  ],
  mode: 'history',
});

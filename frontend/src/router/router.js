import Vue from 'vue';
import Router from 'vue-router';
import registration from '../components/registration';
import login from '../components/login';
import test from '../components/test';
import main from '../components/main';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: main,
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
  ],
  mode: 'history',
});

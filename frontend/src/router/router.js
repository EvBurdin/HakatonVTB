import Vue from 'vue';
import Router from 'vue-router';
import registration from '../components/registration';
import login from '../components/login';
import pollAdd from '../components/pollAdd';
import test from '../components/test';
import main from '../components/main';
import polls from '../components/polls';
import voteCard from '../components/voteCard';
import completedPolls from '../components/completedPolls';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'polls',
      component: polls,
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
    {
      path: '/vote',
      name: 'vote',
      component: voteCard,
      props: true,
    },
    {
      path: '/completed',
      name: 'completedPolls',
      component: completedPolls,
    },
  ],
  mode: 'hash',
});

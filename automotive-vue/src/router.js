import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/aim-and-scope',
      name: 'AimAndScope',
      component: () => import(/* webpackChunkName: "AimAndScope" */ './views/AimAndScope.vue'),
    },
    {
      path: '/deliverables',
      name: 'Deliverables',
      component: () => import(/* webpackChunkName: "Deliverables" */ './views/Deliverables.vue'),
    },
    {
      path: '/members',
      name: 'Members',
      component: () => import(/* webpackChunkName: "Members" */ './views/Members.vue'),
    },
    {
      path: '/forum',
      name: 'Forum',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Forum.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "Contact" */ './views/Contact.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

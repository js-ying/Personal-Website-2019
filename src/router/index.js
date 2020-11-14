import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Skill from '@/components/Skill';
import Blog from '@/components/Blog';
import Portfolio from '@/components/Portfolio';
import NotFoundComponent from '@/components/404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill,
    },
    {
      path: '/blog-intro',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '*',
      component: NotFoundComponent,
    },
  ],
  mode: 'history',
});

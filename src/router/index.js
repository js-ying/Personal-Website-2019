import Vue from 'vue';
import Router from 'vue-router';

import ForbiddenComponent from '@/components/403.vue';
import NotFoundComponent from '@/components/404.vue';
import Blog from '@/components/Blog.vue';
import Home from '@/components/Home.vue';
import Portfolio from '@/components/Portfolio.vue';
import PortfolioDetail from '@/components/PortfolioDetail.vue';
import Skill from '@/components/Skill.vue';

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
      path: '/portfolio-detail',
      name: 'PortfolioDetail',
      component: PortfolioDetail,
    },
    {
      path: '/403',
      name: 'ForbiddenComponent',
      component: ForbiddenComponent,
    },
    {
      path: '*',
      component: NotFoundComponent,
    },
  ],
  mode: 'history',
});

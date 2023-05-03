import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Skill from '@/components/Skill';
// import Skill2 from '@/components/Skill2';
import Blog from '@/components/Blog';
import Portfolio from '@/components/Portfolio';
import PortfolioDetail from '@/components/PortfolioDetail';
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
    // {
    //   path: '/skill2',
    //   name: 'Skill2',
    //   component: Skill2,
    // },
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
      path: '*',
      component: NotFoundComponent,
    },
  ],
  mode: 'history',
});

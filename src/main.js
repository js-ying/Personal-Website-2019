// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LightTimeline from 'vue-light-timeline';
import VueLazyload from 'vue-lazyload';
import VueEasyLightbox from 'vue-easy-lightbox';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

Vue.use(LightTimeline);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: './loading2.png',
  attempt: 1,
});
Vue.use(VueEasyLightbox);

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});

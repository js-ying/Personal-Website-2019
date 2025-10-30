// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueEasyLightbox from 'vue-easy-lightbox';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './style.scss';

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
  mounted() {},
});

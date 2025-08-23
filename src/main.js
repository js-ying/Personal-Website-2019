// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueEasyLightbox from 'vue-easy-lightbox';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

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
  mounted() {
    const photo = new Image();
    photo.src = 'https://jhihsiyingweb.s3.us-east-1.amazonaws.com/Guand.me/my-photo.jpg';

    const wallpaper = new Image();
    wallpaper.src = 'https://jhihsiyingweb.s3.us-east-1.amazonaws.com/Guand.me/my-wallpaper.jpg';
    wallpaper.onload = () => {
      document.body.classList.add('loaded');
      // const loading = document.getElementById('loading'); --- IGNORE ---
      // if (loading) loading.style.display = 'none'; ---
    };
  },
});

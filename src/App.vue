<template>
  <div class="container" id="app">
    <Navbar />
    <keep-alive :include="['Blog', 'Portfolio']">
      <router-view />
    </keep-alive>

    <vue-easy-lightbox :visible="lightbox.visible" :imgs="lightbox.imgs" :index="lightbox.index"
      @hide="hideImg"></vue-easy-lightbox>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      lightbox: {
        visible: false,
        index: 0,
        imgs: [],
      },
    };
  },
  created() {
    this.$bus.$on('openImg', (data) => {
      this.lightbox = data;
    });
  },
  methods: {
    hideImg() {
      this.lightbox.visible = false;
    },
  },
};
</script>

<style scoped>
::v-deep .vel-modal {
  background: rgba(0,0,0,.7) !important;
}

::v-deep .vel-img-wrapper {
  transition: none !important;
}

::v-deep .vel-img-title {
  color: white !important;
  opacity: 1 !important;
  font-size: 18px !important;
  padding: 5px 10px;
}
</style>

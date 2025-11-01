<template>
  <div class="container">
    <Navbar />

    <keep-alive :include="['Portfolio']">
      <router-view />
    </keep-alive>

    <vue-easy-lightbox
      :visible="lightbox.visible"
      :imgs="lightbox.imgs"
      :index="lightbox.index"
      @hide="hideImg"
    ></vue-easy-lightbox>
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

<style scoped></style>

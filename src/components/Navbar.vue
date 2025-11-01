<template>
  <div class="row mt-5 mb-3">
    <div class="col-12 d-flex justify-content-center mb-3">
      <!-- 大頭照 -->
      <lazy-image
        :src="profile.img"
        alt="profile-img"
        class="rounded-circle cursor-pointer"
        id="profile-img"
        aspectRatio="0"
        @click.native="openImg()"
      />
    </div>
    <div class="col-12 text-center mb-3">
      <!-- 名字 (導向首頁) -->
      <router-link to="/">
        <span id="profile-name" @click="toggle('')">
          {{ profile.name }}
        </span>
      </router-link>
    </div>
    <div class="col-12" id="nav-btn-row">
      <div class="row">
        <!-- 導覽列按鈕 -->
        <div class="col-4" v-for="(button, index) in buttons" :key="index">
          <router-link
            class="liquid-glass-button"
            :class="{ active: activated === button.name }"
            :to="button.link"
            @click.native="toggle(button.name)"
          >
            {{ button.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from './LazyImage.vue';

export default {
  name: 'Navbar',
  components: {
    LazyImage,
  },
  data() {
    return {
      profile: {
        name: 'JS Ying',
        img: 'https://jhihsiyingweb.s3.us-east-1.amazonaws.com/Guand.me/my-photo.jpg',
      },
      activated: '',
      buttons: [
        {
          link: '/skill',
          name: '技能',
        },
        {
          link: '/blog-intro',
          name: '部落格',
        },
        {
          link: '/portfolio',
          name: '作品集',
        },
      ],
      lightbox: {
        visible: false,
        index: 0,
        imgs: [],
      },
    };
  },
  methods: {
    toggle(button) {
      this.activated = button;
    },
    openImg() {
      const lightbox = {
        imgs: [this.profile.img],
        index: 0,
        visible: true,
      };

      this.$bus.$emit('openImg', lightbox);
    },
  },
};
</script>

<style scoped>
#profile-img {
  height: 120px;
  width: 120px;
  cursor: pointer;
  background-color: transparent;
  border: 4px solid rgba(235, 240, 255, 0.9);
}

#profile-name {
  font-size: 1.4rem;
  font-weight: 700;
}

#nav-btn-row {
  max-width: 576px;
  margin: 0 auto;
}
</style>

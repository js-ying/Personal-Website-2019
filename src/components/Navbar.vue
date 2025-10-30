<template>
  <div class="row mt-5 mb-3" v-show="notProtfolioDetail">
    <div class="col-12 d-flex justify-content-center mb-3">
      <lazy-image
        :src="profile.img"
        alt="profile-img"
        class="rounded-circle img-thumbnail cursor-pointer"
        id="profile-img"
        aspectRatio="0"
        @click.native="openImg()"
      />
    </div>
    <div class="col-12 text-center mb-3">
      <router-link to="/">
        <div id="profile-name" @click="toggle('')">
          {{ profile.name }}
        </div>
      </router-link>
    </div>
    <div class="col-12" id="nav-btn-row">
      <div class="row">
        <div
          class="col-4 mb-2 text-nowrap nav-btn"
          v-for="(button, index) in buttons"
          :key="index"
          @click="toggle(button.name)"
        >
          <router-link
            class="btn btn-outline-light btn-block"
            :class="{ active: actived === button.name }"
            :to="button.link"
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
      actived: '',
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
      this.actived = button;
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
  computed: {
    notProtfolioDetail() {
      return this.$route.name !== 'PortfolioDetail';
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
  border-width: 4px;
}

#profile-name {
  font-size: 1.4rem;
  font-weight: 700;
}

#nav-btn-row {
  max-width: 576px;
  margin: 0 auto;
}

#nav-btn-row .nav-btn a {
}

@media (min-width: 768px) {
  .nav-btn {
    min-width: 160px;
  }
}
</style>

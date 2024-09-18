<template>
  <div class="row mt-5 mb-3" v-show="notProtfolioDetail">
    <div class="col-12 text-center mb-3">
      <img
        :src="profile.img"
        alt="profile-img"
        class="rounded-circle img-thumbnail img-fluid cursor-pointer"
        id="profile-img"
        @click="openImg()"
      />
    </div>
    <div class="col-12 text-center mb-2">
      <router-link to="/">
        <div id="profile-name" @click="toggle('')">
          {{ profile.name }}
        </div>
      </router-link>
    </div>
    <div class="col-12">
      <div class="row" id="nav-btn-row">
        <div
          class="col-4 mb-3 text-nowrap nav-btn"
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
export default {
  name: 'Navbar',
  data() {
    return {
      profile: {
        name: 'JS Ying',
        // eslint-disable-next-line global-require
        img: require('@/assets/img/my-photo.jpg'),
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
  width: 120px;
  cursor: pointer;
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

<template>
  <div class="row mt-5 mb-3">
    <div class="col-12 col-md-2 text-center text-md-left mb-3">
      <img
        :src="profile.img"
        alt="profile-img"
        class="rounded-circle img-thumbnail img-fluid"
        id="profile-img"
      />
    </div>
    <div class="col-12 col-md-10 my-auto">
      <router-link to="/">
        <h4
          class="text-center text-md-left mb-3"
          id="profile-name"
          @click="toggle('')"
        >
          {{ profile.name }}
        </h4>
      </router-link>
      <div class="row">
        <div
          class="col-4 col-md-2 mb-3"
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
  name: 'App',
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
    };
  },
  methods: {
    toggle(button) {
      this.actived = button;
    },
  },
};
</script>

<style scoped>
#profile-img {
  width: 150px;
}
</style>

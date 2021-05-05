<template>
  <div class='container' id='app'>
    <div class='row mt-5 mb-3'>
      <div class='col-12 col-md-2 text-center text-md-left mb-3'>
        <img
          :src='profile.img' alt='profile-img'
          class='rounded-circle img-thumbnail img-fluid' id='profile-img'
        >
      </div>
      <div class='col-12 col-md-10 my-auto'>
        <router-link to='/'>
          <h4
            class='text-center text-md-left mb-3'
            id='profile-name'
            @click='toggle("")'
          >
            {{ profile.name }}
          </h4>
        </router-link>
        <div class='row'>
          <div
            class='col-4 col-md-2 mb-3'
            v-for='(button, index) in buttons' :key='index'
            @click='toggle( button.name )'
          >
            <router-link
              class='btn btn-outline-light btn-block'
              :class='{ active : actived === button.name }'
              :to='button.link'
            >
              {{ button.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
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
        img: require('./assets/img/my-photo.jpg'),
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

<style>
body:before {
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: url("./assets/img/wallpaper.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#app {
  font-family: "PingFang TC", "Heiti TC", "Noto Sans TC", "Microsoft JhengHei",
    "Open Sans", sans-serif;
  color: white;
  font-size: 1.2rem;
}

a {
  color: white;
}

a:hover {
  color: white;
  text-decoration: underline;
  text-decoration-color: white;
}

.btn-outline-light.focus, .btn-outline-light:focus,
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-light.dropdown-toggle:focus {
  box-shadow: none;
}

#profile-img {
  width: 150px;
}

img[lazy=loading] {
  width: 70px;
  height: 70px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

</style>

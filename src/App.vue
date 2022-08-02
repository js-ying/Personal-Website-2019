<template>
  <div class="container" id="app">
    <Navbar />
    <keep-alive :include="'Portfolio'">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
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
  background: url("./assets/img/wallpaper2-3.jpg") no-repeat center center;
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

.btn-outline-light.focus,
.btn-outline-light:focus,
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-light.dropdown-toggle:focus {
  box-shadow: none;
}

img[lazy="loading"] {
  width: 70px;
  height: 70px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.block {
  border: 1px solid white;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>

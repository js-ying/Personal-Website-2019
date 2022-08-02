<template>
  <div>
    <div class="row">
      <div class="text-right mt-4 mb-2 w-100 back-to-btn" @click="$router.go(-1)">
        返回
      </div>
    </div>
    <div class="block row">
      <div class="col-12 col-md-8">
        <img :src="imgSrc" width="100%" />
      </div>
      <div class="col-12 col-md-4">
        <h5 class="mb-3">
          {{ data.name }}<br />
          <small>{{ data.description }}</small>
        </h5>
        <ul>
          <li>時間：{{ data.date }}</li>
          <li>類型：{{ data.type }}</li>
          <li>技術：{{ data.keywords }}</li>
          <li>用途：{{ data.ifcase }}</li>
        </ul>
        <p>
          {{ data.longDescription }}
        </p>
        點此進入
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      data: this.$route.params.data,
      imgSrc: this.$route.params.imgSrc,
    };
  },
};
</script>

<style scoped>
#portfolio-detail {
  margin-top: 5rem;
}
.back-to-btn {
  font-size: 1rem;
  cursor: pointer;
}

ul {
  padding-left: 1rem;
}

li {
  font-size: 1rem;
}
</style>

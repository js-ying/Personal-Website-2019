<template>
  <div id="blog" class="text-center">
    <div class="mt-3 mb-4">
      <div id="blog-title">
        {{ blog.title }}<br />
        <a :href="blog.link" target="_blank">
          <small>
            {{ blog.link }}
          </small>
        </a>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div class="col-12 col-md-5 block">
          <img width="100%" id="blog-img" v-lazy="blog.imgUrl" @click="openImg()" />
        </div>
      </div>
      <div class="timeline mb-4" v-for="(line, index) in blog.timelines" :key="index">
        <div>
          <span class="badge badge-pill badge-light mb-2">{{ line.tag }}</span>
        </div>
        <div v-html="line.content"></div>
      </div>
      <!-- <light-timeline :items="blog.timelines" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      title: '部落格',
      blog: {
        title: "JS Ying's Blog",
        timelines: [
          {
            tag: '2007',
            content:
              '光 ~ の 設計角落 | 創始於 Yahoo! 奇摩部落格<br />以日記、楓之谷影片、ACG 心得為主。',
            htmlMode: true,
            color: '#8bd8f7',
            type: 'circle',
          },
          {
            tag: '2011',
            content: '部落格搬家 | Pixnet 痞客邦<br />以圖畫日記、影劇心得為主。',
            htmlMode: true,
            color: '#4f7cac',
            type: 'circle',
          },
          {
            tag: '2016',
            content: '部落格搬家 | 自架 Wordpress<br />以生活經驗分享、影劇心得和 3C 開箱為主。',
            htmlMode: true,
            color: '#8bd8f7',
            type: 'circle',
          },
          {
            tag: '2019',
            content: "站名變更 | JS Ying's Blog",
            color: '#4f7cac',
            type: 'circle',
          },
          {
            tag: '2022',
            content:
              '網域變更 | blog.jsy.tw<br />重新架了 server 順便將所有網址從子目錄變為子網域。',
            htmlMode: true,
            color: '#8bd8f7',
            type: 'circle',
          },
        ].reverse(),
        link: 'https://blog.jsy.tw/',
        imgUrl:
          'https://jhihsiyingweb.s3.us-east-1.amazonaws.com/Guand.me/works/wordpress-2025.jpeg',
        btn: '點此進入',
      },
      lightbox: {
        visible: false,
        index: 0,
        imgs: [
          'https://jhihsiyingweb.s3.us-east-1.amazonaws.com/Guand.me/works/wordpress-2025.jpeg',
        ],
      },
    };
  },
  methods: {
    openImg() {
      this.lightbox.visible = true;
      this.$bus.$emit('openImg', this.lightbox);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blog-title {
  font-size: 1.2rem;
  font-weight: 700;
}

#blog-img {
  cursor: pointer;
}

.timeline {
  font-size: 1rem;
}
</style>

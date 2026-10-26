<template>
  <div id="blog" class="text-center">
    <div class="mb-4">
      <div id="blog-title">
        {{ blog.title }}<br />
        <a :href="blog.link" target="_blank">
          <small>
            {{ blog.link }}
          </small>
        </a>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div class="col-12 col-md-6 col-lg-5 block">
          <lazy-image
            :src="blog.imgUrl"
            alt="Blog Image"
            aspect-ratio="56.11%"
            id="blog-img"
            @click.native="openImg()"
          />
        </div>
      </div>
      <div class="timeline mb-4" v-for="(line, index) in blog.timelines" :key="index">
        <div>
          <span class="badge badge-pill badge-light mb-2">{{ line.tag }}</span>
        </div>
        <div v-html="line.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from './LazyImage.vue';

export default {
  name: 'Blog',
  components: {
    LazyImage,
  },
  data() {
    return {
      title: '部落格',
      blog: {
        title: "JS Ying's Blog",
        timelines: [
          {
            tag: '2007',
            content:
              '<b>光 ~ の 設計角落 | 創始於 Yahoo! 奇摩部落格</b><br />以日記、楓之谷影片、ACG 心得為主。',
          },
          {
            tag: '2011',
            content: '<b>部落格搬家 | Pixnet 痞客邦</b><br />以圖畫日記、影劇心得為主。',
          },
          {
            tag: '2016',
            content:
              '<b>部落格搬家 | 自架 Wordpress</b><br />以生活經驗分享、影劇心得和 3C 開箱為主。<br /><a href="https://portfolio.jsy.tw/wordpress/" target="_blank" class="liquid-glass-button timeline-link">封存版 ↗</a>',
          },
          {
            tag: '2019',
            content: "<b>站名變更 | JS Ying's Blog</b>",
          },
          {
            tag: '2022',
            content:
              '<b>網域變更 | blog.jsy.tw</b><br />重新架了 server 順便將所有網址從子目錄變為子網域。',
          },
          {
            tag: '2026',
            content: '<b>部落格搬家 | 自架 Astro</b><br />從 Wordpress 改為 Astro 靜態網站。',
          },
        ].reverse(),
        link: 'https://blog.jsy.tw/',
        imgUrl:
          'https://jhihsiyingweb.s3.us-east-1.amazonaws.com/Guand.me/works/astro-2026.jpeg',
        btn: '點此進入',
      },
      lightbox: {
        visible: false,
        index: 0,
        imgs: [
          'https://jhihsiyingweb.s3.us-east-1.amazonaws.com/Guand.me/works/astro-2026.jpeg',
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

/* v-html 內的連結不吃 scoped 樣式，需用 deep selector；縮小全域玻璃按鈕 */
.timeline >>> .timeline-link {
  width: auto;
  min-width: 0;
  margin-top: 0.5rem;
  padding: 2px 14px;
  font-size: 0.85rem;
}
</style>

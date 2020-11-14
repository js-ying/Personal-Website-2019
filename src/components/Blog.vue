<template>
  <div
    id="blog"
    class="text-center">
    <div class="mt-3 mb-4">
      <h4 class="mb-4"> {{ blog.title }} </h4>
      <light-timeline :items="blog.timelines"/>
      <a
        :href="blog.link"
        target="_blank">
        <button class="btn btn-outline-light mt-4"> {{ blog.btn }} </button>
      </a>
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
        title: 'JS Ying\'s Blog',
        timelines: [
          {
            tag: '2007',
            content: '光 ~ の 設計角落 | 創始於 Yahoo! 奇摩部落格<br />以日記、楓之谷影片、ACG 心得為主。',
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
            content: '站名變更 | JS Ying\'s Blog',
            color: '#4f7cac',
            type: 'circle',
          },
        ],
        link: 'https://jsy.tw/blog',
        btn: '點此進入',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#blog .line-container {
  width: 50%;
  margin: 0 auto !important;
}
@media (max-width: 768px) {
  #blog .line-container {
    width: 100%;
  }
}

#blog .line-container .item-tag {
  color: #dbddde !important;
}
#blog .line-container {
  color: #dbddde !important;
  font-size: 1rem !important;
}

</style>

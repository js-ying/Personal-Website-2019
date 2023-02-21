<template>
  <div id="blog" class="text-center">
    <div class="mt-3 mb-4">
      <h4 class=""> {{ blog.title }} </h4>
      <a :href="blog.link" target="_blank">
        <button class="btn btn-outline-light mt-4 mb-4">
          {{ blog.btn }}

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-box-arrow-up-right mb-1" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
            <path fill-rule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
          </svg>
        </button>
      </a>
      <light-timeline :items="blog.timelines" />
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
          {
            tag: '2022',
            content: '網域變更 | blog.jsy.tw<br />重新架了 server 順便將所有網址從子目錄變為子網域。',
            htmlMode: true,
            color: '#8bd8f7',
            type: 'circle',
          },
        ].reverse(),
        link: 'https://blog.jsy.tw/',
        btn: '點此進入',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blog:deep .line-container {
  width: 50%;
  margin: 0 auto !important;
}

@media (max-width: 768px) {
  #blog:deep .line-container {
    width: 100%;
  }
}

#blog:deep .line-container .item-tag {
  color: #dbddde !important;
}

#blog:deep .line-container {
  color: #dbddde !important;
  font-size: 1rem !important;
}

#blog:deep .warning {
  color: wheat;
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>

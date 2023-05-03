<template>
  <div id="portfolio" class="text-center">
    <!-- 作品集類型按鈕 -->
    <div id="portfolio-type-btn-area">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ active: actived === button.name }"
        class="btn btn-outline-light portfolio-type-btn mr-1 mb-3 ml-1"
        @click="toggle(button.name)"
      >
        {{ button.name }}
      </button>
    </div>
    <!-- 依時間排序按鈕 -->
    <div class="d-flex align-items-end flex-column mb-1" id="sortby-btn">
      <button
        id="sort-by-date-btn"
        class="btn btn-outline-light portfolio-type-btn"
        @click="reverse()"
      >
        {{ sortByDateBtnDesc }}
      </button>
    </div>
    <!-- 作品清單 -->
    <div class="row" id="portfolio-list">
      <!-- 網頁作品 -->
      <div
        v-for="(web, index) in portfolios.webs"
        v-show="showed === web.type"
        :key="'web' + index"
        class="col-12 col-md-4"
      >
        <div class="block">
          <a :href="web.link" target="_blank">
            <img v-lazy="imgDir + web.img" :alt="web.name" class="img-fluid" />
          </a>
          <!-- <router-link
            :to="{
              name: 'PortfolioDetail',
              params: { data: web, imgSrc: imgDir + web.img },
            }"
          >
            <img v-lazy="imgDir + web.img" :alt="web.name" class="img-fluid" />
          </router-link> -->
          <div class="portfolio-keywords">
            <span
              class="badge badge-pill badge-light"
              :class="{ 'mr-2': $keywordIndex < web.keywords.length - 1 }"
              v-for="(keyword, $keywordIndex) in web.keywords"
              :key="$keywordIndex"
            >
              {{ keyword }}
            </span>
          </div>
          <span class="badge badge-primary portfolio-type">
            {{ web.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ web.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2">
            {{ web.name }} <br />
            <small> {{ web.description }} </small><br />
            <small> {{ web.date }} </small>
          </div>
        </div>
      </div>
      <!-- 聊天機器人 -->
      <div
        v-for="(chatbot, index) in portfolios.chatbots"
        v-show="showed === chatbot.type"
        :key="'chatbot' + index"
        class="col-12 col-md-4"
      >
        <div class="block p-2 mb-4">
          <a :href="chatbot.link" target="_blank">
            <img
              v-lazy="imgDir + chatbot.img"
              :alt="chatbot.name"
              class="img-fluid"
            />
          </a>
          <span class="badge badge-primary portfolio-type">
            {{ chatbot.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ chatbot.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2">
            {{ chatbot.name }} <br />
            <small>{{ chatbot.description }}</small
            ><br />
            <small>
              {{ chatbot.date }}
            </small>
          </div>
        </div>
      </div>
      <!-- 海報 -->
      <div
        v-for="(poster, index) in portfolios.posters"
        v-show="showed === poster.type"
        :key="'poster' + index"
        class="col-12 col-md-4"
      >
        <div class="block p-2 mb-4">
          <img
            v-lazy="imgDir + poster.img"
            :alt="poster.name"
            class="img-fluid"
          />
          <span class="badge badge-danger portfolio-type">
            {{ poster.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ poster.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2">
            {{ poster.name }} <br />
            <small>
              {{ poster.date }}
            </small>
          </div>
        </div>
      </div>
      <!-- 部落格主題 -->
      <div
        v-for="(blogTheme, index) in portfolios.blogThemes"
        v-show="showed === blogTheme.type"
        :key="'blogTheme' + index"
        class="col-12 col-md-4"
      >
        <div class="block p-2 mb-4">
          <img
            v-lazy="imgDir + blogTheme.img"
            :alt="blogTheme.name"
            class="img-fluid"
          />
          <span class="badge badge-danger portfolio-type">
            {{ blogTheme.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ blogTheme.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2">
            {{ blogTheme.name }} <br />
            <small>
              {{ blogTheme.date }}
            </small>
          </div>
        </div>
      </div>
      <!-- 影片 -->
      <div
        v-for="(video, index) in portfolios.videos"
        v-show="showed === video.type"
        :key="'video' + index"
        class="col-12 col-md-4"
      >
        <div class="block p-2 mb-4">
          <a :href="video.link" target="_blank">
            <img
              v-lazy="imgDir + video.img"
              :alt="video.name"
              class="img-fluid"
            />
          </a>
          <span class="badge badge-danger portfolio-type">
            {{ video.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ video.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2">
            {{ video.name }} <br />
            <small>{{ video.description }}</small
            ><br />
            <small>
              {{ video.date }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      buttons: [
        { name: 'Web' },
        { name: 'Chatbot' },
        { name: 'Poster' },
        { name: 'Blog-Theme' },
        { name: 'Video' },
      ],
      actived: 'Web',
      showed: 'Web',
      portfolios: {
        webs: [
          {
            type: 'Web',
            ifcase: '自行練習',
            img: 'guand_ver1.jpg',
            name: '個人網頁 Ver.1',
            date: '2016',
            description: '第一版個人網頁。',
            link: 'https://guand2016.jsy.tw/',
            keywords: ['Angular 1', 'jQuery', 'Bootstrap 3', 'RWD'],
            longDescription: '超快ㄉ',
          },
          {
            type: 'Web',
            ifcase: '自行練習',
            img: 'hsinchu.jpg',
            name: '在風城的故事',
            date: '2016',
            description: '獻給陪伴我長大的風之城。',
            link: 'https://hsinchu.jsy.tw/',
            keywords: ['jQuery', 'Bootstrap 3', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '自行練習',
            img: 'fish-story.jpg',
            name: '梁靜茹 Fish-Story',
            date: '2016',
            description: '獻給我最喜愛的歌手。',
            link: 'https://fish.jsy.tw/',
            keywords: ['PHP', 'jQuery', 'Bootstrap 3', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '接案作品',
            img: 'nlplab.jpg',
            name: '元智大學自然語言處理實驗室',
            date: '2017',
            description: '大學專題的實驗室。',
            link: 'http://nlp.innobic.yzu.edu.tw/',
            keywords: ['jQuery', 'Bootstrap 3', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '自行練習',
            img: 'guand_ver2.png',
            name: '個人網頁 Ver.2',
            date: '2017',
            description: '現在個人網頁的前身。',
            link: 'https://guand2017.jsy.tw/',
            keywords: ['Angular 1', 'jQuery', 'Bootstrap 3', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '接案作品（未公開）',
            img: 'stockAI.jpg',
            name: 'AI台股決策&輿情分析系統法人版',
            date: '2018',
            description: '搭載輿情分析的股票決策系統。',
            link: null,
            keywords: ['PHP', 'Vue 2', 'jQuery', 'Bootstrap 4', 'highcharts'],
          },
          {
            type: 'Web',
            ifcase: '接案作品（未公開）',
            img: 'yzusocial.png',
            name: '新元智大學社群媒體分析平台',
            date: '2019',
            description: '分析社群媒體上的輿情。',
            link: null,
            keywords: ['Vue 2', 'Boostrap 4', 'D3.js', 'highcharts', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '公司活動（已去識別）',
            img: 'mentoring-program.png',
            name: '饅頭記 Mentoring-Program',
            date: '2019',
            description: 'Mentor 對 Mentee 的經驗傳承。',
            link: 'https://mentoring-program.jsy.tw/',
            keywords: ['Vue 2', 'Bootstrap 4', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '公司活動（已去識別）',
            img: 'talent-show-2020.png',
            name: 'Talent Show 2020',
            date: '2020',
            description: '新進員工的分組競賽。',
            link: 'https://talent-show.jsy.tw/',
            keywords: ['Vue 2', 'Bootstrap 4', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '自行練習',
            img: 'trainTime.jpg',
            name: '台鐵時刻查詢',
            date: '2020',
            description: '查詢火車時刻，簡單又快速。',
            link: 'https://traintime.jsy.tw/',
            keywords: ['Vue 2', 'Bootstrap-Vue', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '自行練習',
            img: 'hsTrainTime.png',
            name: '高鐵時刻查詢',
            date: '2021',
            description: '查詢高鐵時刻，簡單又快速。',
            link: 'https://hs-traintime.jsy.tw/',
            keywords: ['Vue 3', 'Bootstrap 5', 'RWD'],
          },
          {
            type: 'Web',
            ifcase: '公司活動（已去識別）',
            img: 'university-2023-cover.png',
            name: 'Consulting University 2023',
            date: '2022',
            description: '顧問公司的員工培訓。',
            link: 'https://university.jsy.tw/',
            keywords: ['React 18', 'Bootstrap 5', 'RWD'],
          },
        ],
        chatbots: [
          {
            type: 'Chatbot',
            ifcase: '碩論研究',
            img: 'chatbot-healthcare.jpeg ',
            name: 'LINE 冠心病智慧衛教機器人 beta',
            date: '2018',
            description: '快速取得衛教知識 & 檢測罹病風險。',
            link: 'http://qr-official.line.me/L/brmbM1vOPW.png',
          },
        ],
        blogThemes: [
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog5.jpg',
            name: '千年傳統全新感受',
            date: '2008',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog5.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog6.jpg',
            name: '敗犬女王',
            date: '2009',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog6.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog7.jpg',
            name: '我喜愛的歌手們(Yahoo!Blog)',
            date: '2009',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog7.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog8.jpg',
            name: '那年夏天',
            date: '2009',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog8.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog9.jpg',
            name: '分離',
            date: '2009',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog9.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog10.jpg',
            name: '那一年的幸福時光',
            date: '2009',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog10.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog11.jpg',
            name: '藍天',
            date: '2009',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog11.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog12.jpg',
            name: '我的聖誕我生日',
            date: '2009',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog12.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog13.jpg',
            name: '海派甜心',
            date: '2010',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog13.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog14.jpg',
            name: '痞子英雄(Yahoo!Blog)',
            date: '2010',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog14.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog15.jpg',
            name: '蔚藍盛夏',
            date: '2010',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog15.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog16.jpg',
            name: '近在咫尺',
            date: '2010',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog16.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog17.jpg',
            name: '澶恬',
            date: '2010',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog17.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Yahoo!Blog',
            img: 'y_blog18.jpg',
            name: '魔導少年(Yahoo!Blog)',
            date: '2010',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/y_blog18.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog0.jpg',
            name: '零-重新開始',
            date: '2011',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog0.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog1.jpg',
            name: '痞子英雄(痞客邦)',
            date: '2011',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog1.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog2.jpg',
            name: '魔導少年(痞客邦)',
            date: '2011',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog2.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog3.jpg',
            name: '醉後決定愛上你',
            date: '2011',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog3.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog4.jpg',
            name: '美樂加油',
            date: '2011',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog4.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog5.jpg',
            name: '小資女孩向前衝',
            date: '2011',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog5.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog6.jpg',
            name: '2012是芥茉日',
            date: '2011',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog6.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog7.jpg',
            name: '我喜愛的歌手們(痞客邦)',
            date: '2012',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog7.jpg',
          },
          {
            type: 'Blog-Theme',
            rel: 'gallery',
            ifcase: 'Pixnet',
            img: 'p_blog8.jpg',
            name: 'Best Friend',
            date: '2012',
            description: '',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/p_blog8.jpg',
          },
        ],
        posters: [
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'case1.jpg',
            ifcase: '接案作品',
            name: '樂高機器人營',
            for: '元智大學電機系',
            date: '2013',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case1.jpg',
          },
          // {
          //   type: 'Poster',
          //   rel: 'gallery',
          //   ifcase: '學校社團',
          //   img: 'pi1.jpg',
          //   name: '金頭腦',
          //   date: '2013',
          //   link: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi1.jpg',
          // },
          // {
          //   type: 'Poster',
          //   rel: 'gallery',
          //   img: 'pi2.jpg',
          //   ifcase: '學校社團',
          //   name: '紫錐花反毒宣傳活動',
          //   date: '2014',
          //   link: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi2.jpg',
          // },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'case2.jpg',
            ifcase: '接案作品',
            name: '藍鵲資訊志工',
            for: '龍華科大社團',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case2.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'pi3.jpg',
            ifcase: '學校社團',
            name: '全元逃走中',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi3.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'pi4.jpg',
            ifcase: '學校社團',
            name: '健康性教育宣導',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi4.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai8.jpg',
            ifcase: '學校社團',
            name: '藥物濫用防制講座',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai8.jpg',
          },
          // {
          //   type: 'Poster',
          //   rel: 'gallery',
          //   img: 'pi5.jpg',
          //   ifcase: '學校社團',
          //   name: '四大義工評鑑封面',
          //   date: '2014',
          //   link: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi5.jpg',
          // },
          // {
          //   type: 'Poster',
          //   rel: 'gallery',
          //   img: 'pi6.jpg',
          //   ifcase: '學校社團',
          //   name: '社團博覽會招生系列1',
          //   date: '2014',
          //   link: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi6.jpg',
          // },
          // {
          //   type: 'Poster',
          //   rel: 'gallery',
          //   img: 'ai1.jpg',
          //   ifcase: '學校社團',
          //   name: '社團博覽會招生系列2',
          //   date: '2014',
          //   link: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai1.jpg',
          // },
          // {
          //   type: 'Poster',
          //   rel: 'gallery',
          //   img: 'ai2.jpg',
          //   ifcase: '學校社團',
          //   name: '社團博覽會招生系列3',
          //   date: '2014',
          //   link: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai2.jpg',
          // },
          // {
          //   type: 'Poster',
          //   rel: 'gallery',
          //   img: 'ai3.jpg',
          //   ifcase: '學校社團',
          //   name: '社團博覽會招生系列4',
          //   date: '2014',
          //   link: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai3.jpg',
          // },
          // {
          //   type: 'Poster',
          //   rel: 'gallery',
          //   img: 'ai4.jpg',
          //   ifcase: '學校社團',
          //   name: '新生說明會',
          //   date: '2014',
          //   link: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai4.jpg',
          // },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai5.jpg',
            ifcase: '學校社團',
            name: '期初社大',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai5.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai13.jpg',
            ifcase: '學校社團',
            name: '六大義工開訓',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai13.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai6.jpg',
            ifcase: '學校社團',
            name: '健康週 - 心幸福紫錐花',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai6.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai7.jpg',
            ifcase: '學校社團',
            name: '金頭腦',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai7.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai9.jpg',
            ifcase: '學校社團',
            name: '藥物濫用防制講座',
            date: '2014',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai9.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai10.jpg',
            ifcase: '學校社團',
            name: '金頭腦',
            date: '2015',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai10.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai11.jpg',
            ifcase: '學校社團',
            name: '六大義工評鑑宣傳',
            date: '2015',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai11.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai12.jpg',
            ifcase: '學校社團',
            name: '六大義工評鑑封面',
            date: '2015',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai12.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'ai14.jpg',
            ifcase: '學校社團',
            name: '橘衛兵幹訓中心',
            date: '2015',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai14.jpg',
          },
          {
            type: 'Poster',
            rel: 'gallery',
            img: 'case3.jpg',
            ifcase: '接案作品',
            name: '5Q賞金獵人',
            for: '元智大學生輔組',
            date: '2016',
            link:
              'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case3.jpg',
          },
        ],
        videos: [
          {
            type: 'Video',
            img: 'ms20.jpg',
            ifcase: '自行練習',
            name: 'No.20 我就是我',
            date: '2011',
            description: '- 楓之谷僧侶三轉紀念影片 -',
            link: 'https://jsy.tw/blog/483/',
          },
          {
            type: 'Video',
            img: 'ms21.jpg',
            ifcase: '自行練習',
            name: 'No.21 下一頁的我',
            date: '2014',
            description: '- 楓之谷祭司四轉紀念影片 -',
            link: 'https://jsy.tw/blog/571',
          },
          {
            type: 'Video',
            img: 'yzuls2014.jpg',
            ifcase: '學校社團',
            name: '生活尖兵迎新宣傳影片（預告版）',
            date: '2014',
            description: '- 社團博覽會與迎新茶會宣傳 -',
            link: 'https://www.youtube.com/watch?v=dAFfxFxv9f0',
          },
          {
            type: 'Video',
            img: 'yzuls2014OP.jpg',
            ifcase: '學校社團',
            name: '生活尖兵 40 秒團務報告影片',
            date: '2014',
            description: '- 義工開訓典禮影片 -',
            link: 'https://www.youtube.com/watch?v=vGbEe-__DzY',
          },
          {
            type: 'Video',
            img: 'fintech2017.jpg',
            ifcase: '競賽作品',
            name: '金融社群媒體分析平台 Demo',
            date: '2017',
            description: '- 2017 上海商銀 Fintech 競賽 -',
            link: 'https://youtu.be/GQQ_qe0JUk0',
          },
          {
            type: 'Video',
            img: 'yzuls2018.jpg',
            ifcase: '學校社團',
            name: '生活尖兵 16 to 17 畢業紀念影片',
            date: '2018',
            description: '- 歡慶第 17 屆尖兵畢業 -',
            link: 'https://www.youtube.com/watch?v=ZWnZaRXU65E',
          },
        ],
      },
      toogleSortByDate: true,
      imgDir: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/',
    };
  },
  computed: {
    sortByDateBtnDesc() {
      return this.toogleSortByDate ? '▲ 依時間' : '▼ 依時間';
    },
  },
  created() {
    this.reverse();
  },
  methods: {
    toggle(button) {
      this.actived = button;
      this.showed = button;
    },
    reverse() {
      this.toogleSortByDate = !this.toogleSortByDate;
      Object.keys(this.portfolios).forEach((key) => {
        this.portfolios[key] = this.portfolios[key].reverse();
      });
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.portfolio-type-btn {
  border-radius: 0%;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 3px solid white;
  border-left: 0px;
  font-weight: 900;
}

.portfolio-type-btn:hover {
  background-color: transparent;
  color: #8bd8f7;
  border-bottom: 3px solid #8bd8f7;
}

.portfolio-type-btn.active,
.portfolio-type-btn:active {
  background-color: transparent !important;
  color: #8bd8f7 !important;
  border-bottom: 3px solid #8bd8f7 !important;
}

.portfolio-type {
  position: absolute;
  top: 15px;
  right: 30px;
}

.portfolio-ifcase {
  position: absolute;
  top: 15px;
  left: 30px;
}

.portfolio-keywords {
  margin-top: 5px;
  overflow: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  font-size: 90%;
}

.portfolio-keywords::-webkit-scrollbar {
  background: transparent; /* Chrome/Safari/Webkit */
  width: 0px;
  height: 0px;
}

#sort-by-date-btn {
  width: 100px;
  font-size: 1rem;
  text-align: right;
  border-bottom: 0px;
  padding: 0;
  margin-bottom: 0.2rem;
  font-weight: 400;
}

#sort-by-date-btn:hover,
#sort-by-date-btn:active {
  color: white !important;
  background-color: transparent;
  border-bottom: 0px !important;
}
</style>

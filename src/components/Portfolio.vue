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
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <div class="block">
          <a :href="web.link" target="_blank">
            <img
              v-lazy="imgDir + web.img"
              :alt="web.name"
              class="img-fluid web-img"
              @click="!web.link && openImg(index, 'webImgs')"
            />
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
          <div class="pt-2 pr-2 pl-2 portfolio-intro">
            <span class="portfolio-name"> {{ web.name }} </span><br />
            <small> {{ web.description }} </small><br />
            <small> {{ web.date }} </small>
          </div>
        </div>
      </div>
      <!-- 部落格主題 -->
      <div
        v-for="(blogTheme, index) in portfolios.blogThemes"
        v-show="showed === blogTheme.type"
        :key="'blogTheme' + index"
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <div class="block p-2 mb-4">
          <img
            v-lazy="imgDir + blogTheme.img"
            :alt="blogTheme.name"
            class="img-fluid blog-theme-img"
            @click="openImg(index, 'blogThemeImgs')"
          />
          <span class="badge badge-danger portfolio-type">
            {{ blogTheme.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ blogTheme.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2 portfolio-intro">
            <span class="portfolio-name">{{ blogTheme.name }}</span
            ><br />
            <small>
              {{ blogTheme.date }}
            </small>
          </div>
        </div>
      </div>
      <!-- 海報 -->
      <div
        v-for="(poster, index) in portfolios.posters"
        v-show="showed === poster.type"
        :key="'poster' + index"
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <div class="block p-2 mb-4">
          <img
            v-lazy="imgDir + poster.img"
            :alt="poster.name"
            class="img-fluid poster-img"
            @click="openImg(index, 'posterImgs')"
          />
          <span class="badge badge-danger portfolio-type">
            {{ poster.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ poster.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2 portfolio-intro">
            <span class="portfolio-name">{{ poster.name }}</span
            ><br />
            <small>
              {{ poster.date }}
            </small>
          </div>
        </div>
      </div>
      <!-- 影片 -->
      <div
        v-for="(video, index) in portfolios.videos"
        v-show="showed === video.type"
        :key="'video' + index"
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <div class="block p-2 mb-4">
          <a :href="video.link" target="_blank">
            <img v-lazy="imgDir + video.img" :alt="video.name" class="img-fluid" />
          </a>
          <span class="badge badge-danger portfolio-type">
            {{ video.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ video.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2 portfolio-intro">
            <span class="portfolio-name">{{ video.name }}</span
            ><br />
            <small>{{ video.description }}</small
            ><br />
            <small>
              {{ video.date }}
            </small>
          </div>
        </div>
      </div>
      <!-- 聊天機器人 -->
      <div
        v-for="(chatbot, index) in portfolios.chatbots"
        v-show="showed === chatbot.type"
        :key="'chatbot' + index"
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <div class="block p-2 mb-4">
          <a :href="chatbot.link" target="_blank">
            <img v-lazy="imgDir + chatbot.img" :alt="chatbot.name" class="img-fluid" />
          </a>
          <span class="badge badge-primary portfolio-type">
            {{ chatbot.type }}
          </span>
          <span class="badge badge-dark portfolio-ifcase">
            {{ chatbot.ifcase }}
          </span>
          <div class="pt-2 pr-2 pl-2 portfolio-intro">
            <span class="portfolio-name">{{ chatbot.name }}</span
            ><br />
            <small>{{ chatbot.description }}</small
            ><br />
            <small>
              {{ chatbot.date }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import portfolioDataSet from '../../public/dataSet/portfolioDataSet';

export default {
  name: 'Portfolio',
  data() {
    return {
      buttons: [
        { name: 'Web' },
        { name: 'Blog-Theme' },
        { name: 'Poster' },
        { name: 'Video' },
        { name: 'Chatbot' },
      ],
      actived: 'Web',
      showed: 'Web',
      portfolios: portfolioDataSet,
      toggleSortByDate: true,
      imgDir: 'https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/',
      lightbox: {
        visible: false,
        index: 0,
        imgs: [],
        webImgs: [],
        posterImgs: [],
        blogThemeImgs: [],
      },
    };
  },
  computed: {
    sortByDateBtnDesc() {
      return this.toggleSortByDate ? '▲ 依時間' : '▼ 依時間';
    },
  },
  methods: {
    toggle(button) {
      this.actived = button;
      this.showed = button;
    },
    reverse() {
      this.toggleSortByDate = !this.toggleSortByDate;
      Object.keys(this.portfolios).forEach((key) => {
        this.portfolios[key] = this.portfolios[key].reverse();
      });
      this.lightbox.webImgs = this.lightbox.webImgs.reverse();
      this.lightbox.posterImgs = this.lightbox.posterImgs.reverse();
      this.lightbox.blogThemeImgs = this.lightbox.blogThemeImgs.reverse();
    },
    openImg(index, type) {
      this.lightbox.imgs = this.lightbox[type];
      this.lightbox.index = index;
      this.lightbox.visible = true;

      this.$bus.$emit('openImg', this.lightbox);
    },
    initLightboxImgs() {
      this.lightbox.webImgs = this.portfolios.webs.map((web) => ({
        title: `${web.name} (${web.date})`,
        src: this.imgDir + web.img,
      }));
      this.lightbox.posterImgs = this.portfolios.posters.map((poster) => ({
        title: `${poster.name} (${poster.date})`,
        src: poster.link,
      }));
      this.lightbox.blogThemeImgs = this.portfolios.blogThemes.map((blogTheme) => ({
        title: `${blogTheme.name} (${blogTheme.date})`,
        src: blogTheme.link,
      }));
    },
  },
  created() {
    this.reverse();
    this.initLightboxImgs();
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
  border-bottom: 3px solid #5dadf2;
}

.portfolio-type-btn.active,
.portfolio-type-btn:active {
  background-color: transparent !important;
  color: #8bd8f7 !important;
  border-bottom: 3px solid #5dadf2 !important;
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
  background: transparent;
  /* Chrome/Safari/Webkit */
  width: 0px;
  height: 0px;
}

.portfolio-intro {
  font-size: 1.1425rem;
}

.portfolio-name {
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

.web-img,
.poster-img,
.blog-theme-img {
  cursor: pointer;
}
</style>

<template>
  <div class='home text-center pt-3'>
    2019 畢業<br />
    國立中央大學 | 資訊管理系 | 碩士<br /><br />
    2019 工作<br />
    外商 | 前端工程師<br /><br />
    #柴犬 #3C #Netflix #中文歌<br />
    #前端網頁設計與開發<br /><br />
    <a
      :href='contact.link'
      target='_blank'
      class='mr-3'
      v-for='(contact, index) in contacts'
      :key='index'
    >
      <span class='badge badge-pill badge-secondary mb-4'> {{ contact.name }} </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      contacts: [
        {
          name: 'E-mail',
          link: 'mailto:jhihsiying@gmail.com',
        },
        {
          name: 'Github',
          link: 'https://github.com/jhihsiying',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.badge:hover {
  background-color: #8bd8f7;
  cursor: pointer;
}

.badge:last-child {
  margin-right: 0rem !important;
}
</style>

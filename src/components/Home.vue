<template>
  <div class='home text-center pt-3'>
    <p>2019 畢業<br />
    國立中央大學 | 資訊管理碩士</p>
    <p>2019 工作至今<br />IBM Taiwan | Application Consultant</p>
    <p>#柴犬 #梁靜茹 #前端</p>
    <p>
      <a
        :href='contact.link'
        target='_blank'
        :class="{ 'mr-3': index != contacts.length - 1 }"
        v-for='(contact, index) in contacts'
        :key='index'
      >
        <span class='badge badge-pill badge-secondary'> {{ contact.name }} </span>
      </a>
    </p>
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
          link: 'https://github.com/js-ying',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-bottom: 2rem;
}

.badge:hover {
  background-color: #8bd8f7;
  cursor: pointer;
}

.badge:last-child {
  margin-right: 0rem !important;
}
</style>

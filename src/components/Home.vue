<template>
  <div class="home text-center pt-3">
    <p>
      IBM Taiwan | Application Consultant<br />
      <span class="small"
        >2019 工作至今．{{ ibmDuringTime.years }} 年 {{ ibmDuringTime.months }} 月</span
      >
    </p>
    <p>
      國立中央大學 | 資訊管理碩士<br />
      <span class="small">2017 - 2019</span>
    </p>
    <p class="">喜歡柴犬和梁靜茹，擅長前端開發。<br />樂於學習各種前端新知，僅因前端很美。</p>
    <p>
      <a
        :href="contact.link"
        target="_blank"
        :class="{ 'mr-3': index != contacts.length - 1 }"
        v-for="(contact, index) in contacts"
        :key="index"
      >
        <span class="badge badge-pill badge-secondary">
          {{ contact.name }}
        </span>
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
          link: 'mailto:jsying1994@gmail.com',
        },
        {
          name: 'Github',
          link: 'https://github.com/js-ying',
        },
      ],
    };
  },
  computed: {
    ibmDuringTime() {
      const ibmStartDate = new Date(2019, 7); // 2019/08
      const now = new Date();
      let years = now.getFullYear() - ibmStartDate.getFullYear();
      let months = now.getMonth() - ibmStartDate.getMonth() + 1;

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      return { years, months };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-bottom: 2rem;
}

.badge:hover {
  background-color: #5dadf2;
  cursor: pointer;
}

.badge:last-child {
  margin-right: 0rem !important;
}
</style>

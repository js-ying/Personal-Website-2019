<template>
  <div id="home" class="text-center">
    <section>
      <span class="badge badge-pill badge-light mb-2">工作經歷</span>
      <div>
        IBM Taiwan．Application Consultant<br />
        <span class="small"
          >2019 工作至今．{{ ibmDuringTime.years }} 年 {{ ibmDuringTime.months }} 月</span
        >
      </div>
    </section>
    <section>
      <span class="badge badge-pill badge-light mb-2">教育背景</span>
      <div>
        國立中央大學．資訊管理碩士<br />
        <span class="small">2017 - 2019</span><br />
      </div>
      <div>
        元智大學．資訊管理學士<br />
        <span class="small">2013 - 2017</span>
      </div>
    </section>
    <section>
      <!-- <span class="badge badge-pill badge-light mb-2">關於我</span> -->
      <p class="">喜歡柴犬和梁靜茹，擅長前端開發。<br />樂於學習各種前端新知，僅因前端很美。</p>
    </section>
    <section id="contact-section">
      <p>
        <a
          :href="contact.link"
          target="_blank"
          :class="{ 'mr-3': index != contacts.length - 1 }"
          v-for="(contact, index) in contacts"
          :key="index"
        >
          <span class="badge badge-pill badge-secondary clickable">
            {{ contact.name }}
          </span>
        </a>
      </p>
    </section>
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
section {
  font-size: 1rem;
  margin-bottom: 1.4rem;
}
</style>

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
    <section id="contact-section">
      <p>
        <a
          :href="contact.copy ? '#' : contact.link"
          :target="contact.copy ? null : '_blank'"
          :title="contact.copy ? '複製 e-mail 地址' : contact.name"
          @click="contact.copy && copyEmail($event, contact.copy)"
          :class="{ 'mr-3': index != contacts.length - 1 }"
          v-for="(contact, index) in contacts"
          :key="index"
        >
          <i :class="contact.svg" class="up-on-hover" style="font-size: 1.5rem"></i>
        </a>
      </p>
    </section>
    <transition name="toast-fade">
      <div v-if="toast" class="copy-toast" role="status">{{ toast }}</div>
    </transition>
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
          copy: 'hi@jsy.tw',
          svg: 'bi bi-envelope-fill',
        },
        {
          name: 'Github',
          link: 'https://github.com/js-ying',
          svg: 'bi bi-github',
        },
      ],
      toast: '',
      toastTimer: null,
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
  methods: {
    // 複製信箱到剪貼簿並顯示提示；複製失敗時仍顯示地址供手動複製
    async copyEmail(event, email) {
      event.preventDefault();
      let copied = false;
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch (e) {
        copied = false;
      }
      this.toast = copied ? `已複製 e-mail 地址：${email}` : `請手動複製 e-mail 地址：${email}`;
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toast = '';
      }, 2500);
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
.copy-toast {
  position: fixed;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  z-index: 1080;
  width: max-content;
  max-width: calc(100% - 32px);
  padding: 10px 18px;
  border-radius: 8px;
  background: rgba(33, 37, 41, 0.92);
  color: #fff;
  font-size: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.2s;
}
.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
}
</style>

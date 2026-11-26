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
          :href="contact.mail ? '#' : contact.link"
          :target="contact.mail ? null : '_blank'"
          :title="contact.mail ? '來信聯絡' : contact.name"
          :aria-haspopup="contact.mail ? 'dialog' : null"
          @click="contact.mail && openMail($event)"
          :class="{ 'mr-3': index != contacts.length - 1 }"
          v-for="(contact, index) in contacts"
          :key="index"
        >
          <i :class="contact.svg" class="up-on-hover" style="font-size: 1.5rem"></i>
        </a>
      </p>
    </section>
    <dialog
      ref="mailDialog"
      class="mail-dialog"
      aria-labelledby="mail-dialog-title"
      tabindex="-1"
      @click="closeOnBackdrop"
    >
      <div class="mail-card">
      <form method="dialog" class="mail-close"><button aria-label="關閉">✕</button></form>
      <h3 id="mail-dialog-title">來信聯絡</h3>
      <p class="mail-address">
        <span class="mail-value"
          >{{ mail }}<button
            type="button"
            class="mail-copy"
            title="複製電子郵件地址"
            aria-label="複製電子郵件地址"
            @click="copyMail"
          >
            <i class="bi bi-copy"></i></button
        ></span>
      </p>
      <a class="mail-to" :href="`mailto:${mail}`">開啟郵件程式</a>
      </div>
      <!-- 提示放在 dialog 內才會顯示在 modal 上層 -->
      <transition name="toast-fade">
        <div v-if="toast" class="copy-toast" role="status">{{ toast }}</div>
      </transition>
    </dialog>
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
          mail: true,
          svg: 'bi bi-envelope-fill',
        },
        {
          name: 'Github',
          link: 'https://github.com/js-ying',
          svg: 'bi bi-github',
        },
      ],
      mail: 'hi@jsy.tw',
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
    // 開啟寄信視窗；滑鼠或觸控開啟時 focus 放在視窗本身，避免 Safari 在關閉鈕顯示外框
    openMail(event) {
      event.preventDefault();
      const byPointer = event.detail > 0;
      if (byPointer) event.currentTarget.blur();
      this.$refs.mailDialog.showModal();
      if (byPointer) this.$refs.mailDialog.focus();
    },
    // 只在點到視窗外的背景時關閉（點視窗留白處 target 也是 dialog，需比對座標）
    closeOnBackdrop(event) {
      const dialog = this.$refs.mailDialog;
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      const inX = event.clientX >= r.left && event.clientX <= r.right;
      const inY = event.clientY >= r.top && event.clientY <= r.bottom;
      if (!inX || !inY) dialog.close();
    },
    // 複製地址並跳出提示
    async copyMail() {
      let copied = false;
      try {
        await navigator.clipboard.writeText(this.mail);
        copied = true;
      } catch (e) {
        copied = false;
      }
      this.toast = copied ? '已複製' : '複製失敗，請手動選取';
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toast = '';
      }, 2000);
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
/* 寄信視窗：dialog 只當透明外框，玻璃效果放在內層卡片（避免 Safari 偽元素模糊殘影） */
.mail-dialog {
  width: min(320px, calc(100% - 32px));
  max-width: none;
  padding: 0;
  border: 0;
  background: none;
  overflow: visible;
  color: #ebf0ff;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
}
.mail-dialog:focus {
  outline: none;
}
.mail-card {
  position: relative;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 16px 40px rgba(3, 8, 20, 0.55), 0 0 28px rgba(120, 140, 255, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  backdrop-filter: blur(18px) saturate(140%);
}
.mail-dialog::backdrop {
  background: rgba(3, 8, 20, 0.55);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}
.mail-dialog h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}
.mail-address {
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 24px;
}
/* 地址單獨置中，複製圖示掛在右側不佔置中寬度 */
.mail-value {
  position: relative;
}
.mail-copy {
  position: absolute;
  top: 50%;
  left: 100%;
  margin-left: 4px;
  transform: translateY(-50%);
  display: inline-flex;
  padding: 6px;
  border: 0;
  border-radius: 8px;
  background: none;
  color: rgba(235, 240, 255, 0.6);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.16s, color 0.16s;
}
.mail-copy:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ebf0ff;
}
.mail-to {
  display: block;
  padding: 9px 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.07);
  color: #ebf0ff;
  box-shadow: 0 6px 18px rgba(3, 8, 20, 0.6), 0 0 18px rgba(120, 140, 255, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  font-size: 15px;
  line-height: 22px;
  text-decoration: none;
  transition: background-color 0.16s, transform 0.16s;
}
.mail-to:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ebf0ff;
  text-decoration: none;
  transform: translateY(-1px);
}
.mail-close {
  position: absolute;
  top: 12px;
  right: 12px;
  margin: 0;
}
.mail-close button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: none;
  color: rgba(235, 240, 255, 0.6);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
}
.mail-close button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ebf0ff;
}
/* 複製成功的底部提示，配色與視窗反轉 */
.copy-toast {
  position: fixed;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  width: max-content;
  max-width: calc(100% - 32px);
  padding: 8px 16px;
  border-radius: 8px;
  background: #ebf0ff;
  color: #141a26;
  font-size: 0.88rem;
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

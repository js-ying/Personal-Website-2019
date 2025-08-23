<template>
  <div class="lazy-image-wrapper" :style="{ paddingBottom: aspectRatio }">
    <div v-if="!loaded" class="skeleton-loader"></div>
    <!-- 只有當元素進入 viewport (intersected = true) 才開始載入圖片 -->
    <img v-if="intersected" :src="src" :alt="alt" @load="onImageLoad" :class="{ loaded: loaded }" />
  </div>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true, // 必填：圖片來源網址
    },
    alt: {
      type: String,
      default: '', // 預設為空字串，避免缺少 alt 造成無障礙問題
    },
    aspectRatio: {
      type: String,
      default: '56.25%', // 預設比例為 16:9，透過 paddingBottom 模擬高度
    },
  },
  data() {
    return {
      loaded: false, // 控制圖片是否載入完成
      intersected: false, // 是否進入 viewport
      observer: null, // IntersectionObserver 實例
    };
  },
  mounted() {
    // 初始化 IntersectionObserver，當元素進入視窗時觸發
    this.observer = new IntersectionObserver(this.onIntersection, {
      rootMargin: '100px', // 提前 100px 載入，避免用戶看到延遲
    });
    this.observer.observe(this.$el); // 觀察元件根元素
  },
  beforeDestroy() {
    // 元件銷毀前解除觀察，避免記憶體洩漏
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    // 當圖片進入 viewport 時觸發
    onIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersected = true; // 標記為可載入
          this.observer.unobserve(this.$el); // 一次觸發後停止觀察
        }
      });
    },
    // 圖片載入完成時觸發，顯示淡入效果
    onImageLoad() {
      this.loaded = true;
    },
  },
};
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  overflow: hidden;
}

.skeleton-loader {
  /* 骨架載入效果（閃動的灰色背景） */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 25%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.06) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 2.5s infinite;
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

img {
  /* 圖片初始為透明，載入後才淡入 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持圖片比例填滿容器 */
  opacity: 0;
  transition: opacity 0.5s; /* 淡入效果 */
}

img.loaded {
  opacity: 1;
}
</style>

<template>
  <div class='row' id='skill'>
    <div class='col-md-6' v-for='(skill, index) in skills' :key='"title" + index'>
      <div class='text-center block'>
        <h5 class='mt-2 mb-2'> {{ skill.title }} </h5>
        <div class="mb-2 desc">{{ skill.desc }}</div>
        <div class="mb-3">
          <span
            class='badge badge-pill badge-light mr-3'
            v-for='(content, index) in skill.contents' :key='"content" + index'
          >
            {{ content }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      skills: [
        {
          title: 'Javascript',
          desc: '工作主要使用 Angular 和 Vue3 開發銀行內部核心系統。',
          contents: ['Angular', 'Vue 2', 'Vue 3', 'React 18', 'TypeScript', 'jQuery'],
        },
        {
          title: 'CSS',
          desc: '擅長使用 Bootstrap 快速客製具有 RWD 的使用者介面。',
          contents: ['Bootstrap', 'Sass', 'Responsive Web'],
        },
        {
          title: 'Server-End',
          desc: '後端經驗不多，近期工作開始使用 JAVA 開發後端業務邏輯。',
          contents: ['JAVA', 'PHP', 'Laravel', 'MySQL'],
        },
        {
          title: 'Data Visualization',
          desc: '學生時期常使用各種資料視覺工具打造 Dahsboard。',
          contents: ['Google Charts', 'D3.js', 'Ploty.js', 'Highcharts.js'],
        },
        {
          title: 'Design',
          desc: '學生時期常製作社團文宣。',
          contents: ['illustrator', 'PhotoImpact'],
        },
        {
          title: 'Video',
          desc: '學生時期常剪輯遊戲影片。',
          contents: ['Sony Vegas'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.block {
  height: 80%;
}

.desc {
  font-size: 1rem;
  /* font-style: italic; */
}

.badge:last-child {
  margin-right: 0rem !important;
}
</style>

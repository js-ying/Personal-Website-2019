<template>
  <div class='row' id='skill'>
    <div class='col-md-12' v-for='(skill, index) in skills' :key='"title" + index'>
      <div class='text-center'>
        <h5 class='mt-2 mb-3'> {{ skill.title }} </h5>
        <div class="mb-3 content">
          <div class="row block">
            <div class="col-3">技術名稱</div>
            <div class="col-9">作品</div>
          </div>
          <div class="row" v-for='(content, index) in skill.contents' :key='"content" + index'>
            <div class="col-3">{{ content.name }}</div>
            <div class="col-9 text-left">
              <ul>
                <li v-for="(app, index) in content.applications" :key='"app" + index'>
                  {{ app }}
                </li>
              </ul>
            </div>
          </div>
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
          contents: [
            {
              name: 'Vue 2',
              time: '2018',
              type: '自學',
              applications: ['社群媒體分析平台', '顧問公司內部活動官網 * 2', '台鐵時刻查詢'],
            },
            {
              name: 'Angular 2',
              time: '2019',
              type: '工作',
              applications: ['銀行內部跨境開戶系統', 'eLoan 系統'],
            },
            {
              name: 'Vue 3',
              time: '2020',
              type: '工作',
              applications: ['銀行內部外匯交易系統', '高鐵時刻查詢'],
            },
            {
              name: 'React 18',
              time: '2022',
              type: '自學',
              applications: ['顧問公司員工培訓活動官網'],
            },
          ],
        },
        // {
        //   title: 'CSS',
        //   contents: ['Bootstrap', 'Sass', 'Responsive Web'],
        // },
        // {
        //   title: 'Server-End',
        //   contents: ['PHP', 'Laravel', 'MySQL'],
        // },
        // {
        //   title: 'Data Visualization',
        //   contents: ['Google Charts', 'D3.js', 'Ploty.js', 'Highcharts.js'],
        // },
        // {
        //   title: 'Design',
        //   contents: ['Sketch', 'illustrator', 'PhotoImpact'],
        // },
        // {
        //   title: 'Video',
        //   contents: ['Sony Vegas'],
        // },
      ],
    };
  },
};
</script>

<style scoped>
.block {
  font-size: 0.875em;
}
.content {
  width: 60%;
  margin: 0 auto;
}
</style>

<template>
  <div class='row' id='skill'>
    <div class='col-md-6' v-for='(skill, index) in skills' :key='"title" + index'>
      <div class='text-center block'>
        <h5 class='mt-2 mb-3'> {{ skill.title }} </h5>
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
          contents: ['Angular 2', 'Vue 2', 'Vue 3', 'TypeScript', 'jQuery'],
        },
        {
          title: 'CSS',
          contents: ['Bootstrap', 'Sass', 'Responsive Web'],
        },
        {
          title: 'Server-End',
          contents: ['PHP', 'Laravel', 'MySQL'],
        },
        {
          title: 'Data Visualization',
          contents: ['Google Charts', 'D3.js', 'Ploty.js', 'Highcharts.js'],
        },
        {
          title: 'Design',
          contents: ['Sketch', 'illustrator', 'PhotoImpact'],
        },
        {
          title: 'Video',
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
.badge:last-child {
  margin-right: 0rem !important;
}
</style>

<template>
  <div class='row' id='skill'>
    <div class='col-md-6 mb-4' v-for='(skill, index) in skills' :key='"title" + index'>
      <div class='text-center block h-100 p-3'>
        <h5 class='mb-3'> {{ skill.title }} </h5>
        <span
          class='badge badge-pill badge-light mr-3 mb-1'
          v-for='(content, index) in skill.contents' :key='"content" + index'
        >
          {{ content }}
        </span>
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
          title: 'CSS',
          contents: ['Bootstrap', 'Sass', 'Responsive Web', 'Grid Layout'],
        },
        {
          title: 'Javascript',
          contents: ['jQuery', 'Angular', 'Vue.js'],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  border: 1px solid white;
}

.badge:hover {
  background-color: #8bd8f7;
  cursor: pointer;
}

.badge:last-child {
  margin-right: 0rem !important;
}
</style>

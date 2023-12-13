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
import skillDataSet from '../../public/dataSet/skillDataSet';

export default {
  name: 'Skill',
  data() {
    return {
      skills: skillDataSet,
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
}

.badge:last-child {
  margin-right: 0rem !important;
}
</style>

<template>
  <div class="row justify-content-center" id="skill">
    <div class="col-md-8" v-for="(skill, index) in skills" :key="'title' + index">
      <div class="text-center block">
        <span class="skill-title">{{ skill.title }}</span>
        <div class="mb-2 skill-desc">{{ skill.desc }}</div>
        <div class="mb-1 skill-stack">
          <span
            class="badge badge-pill badge-light"
            v-for="(content, index) in skill.contents"
            :key="'content' + index"
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
  /* height: 80%; */
  padding: 10px 12px;
}

.skill-title {
  font-size: 1.2rem;
  font-weight: 700;
}

.skill-desc {
}

.skill-stack {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
}
</style>

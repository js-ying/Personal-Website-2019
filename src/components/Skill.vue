<template>
  <div class="row" id="skill">
    <div class="col-md-6" v-for="(skill, index) in skills" :key="'title' + index">
      <div class="text-center block">
        <h5 class="">{{ skill.title }}</h5>
        <div class="mb-2" id="desc">{{ skill.desc }}</div>
        <div class="mb-1" id="stack">
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

#desc {
  font-size: 1rem;
}

#stack {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
}
</style>

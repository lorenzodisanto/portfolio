<script>
import ProjectList from "../components/ProjectList.vue";
export default {
  data() {
    return {
      title: "My Projects.",
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <div class="container my-5">
    <h1>{{ title }}</h1>
  </div>
  <project-list></project-list>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
}
</style>

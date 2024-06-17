<script>
export default {
  // ricevo il contenuto del progetto via props
  props: { project: Object },

  computed: {},
};
</script>

<template>
  <div class="col">
    <router-link
      :to="{
        name: 'project',
        params: {
          slug: project.name,
        },
        state: {
          desc: project.description,
          img: project.image,
        },
      }"
      class="card-btn"
    >
      <div class="card h-100">
        <div class="cover">
          <img :src="'../img/' + project.image + '.png'" class="card-img-top" />
        </div>
        <!-- <div class="card-body">
          <h3 class="card-title">{{ project.name }}</h3>
        </div> -->
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .card-btn {
    cursor: pointer;
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.02);
  }
}
</style>

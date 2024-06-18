<script>
export default {
  // ricevo il contenuto del progetto via props
  props: { project: Object },

  computed: {},
};
</script>

<template>
  <div class="col">
    <div class="project-card">
      <div class="thumbnail">
        <img :src="'../img/' + project.image + '.png'" class="img-fluid" />
      </div>
      <div class="card-content">
        <span class="category">Category</span>
        <h3 class="title">{{ project.name }}</h3>
        <p class="description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .project-card {
    position: relative;

    .thumbnail {
      width: 100%;
    }

    .card-content {
      width: 100%;
      background-color: #2d4059;
      position: absolute;
      bottom: 0;
      .category {
        height: 30px;
        padding: 0 10px;
        position: absolute;
        background-color: #ff5722;
        top: -30px;
      }
      .description {
        display: none;
      }
    }
    &:hover .description {
      display: block;
    }
    &:hover .thumbnail {
      opacity: 0.7;
    }
  }
}
</style>

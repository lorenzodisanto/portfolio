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
        <h3 class="title pt-2 mb-3">{{ project.name }}</h3>
        <p class="description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .project-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    .thumbnail {
      width: 100%;
    }

    .card-content {
      width: 100%;
      background-color: #2d4059;
      transition: 0.7s;
      padding: 0 10px;
      position: absolute;
      bottom: 0;
      height: 15%;

      .category {
        height: 30px;
        padding: 0 10px;
        position: absolute;
        background-color: #ff5722;
        top: -30px;
        right: 0;
      }
    }
    &:hover .card-content {
      height: 65%;
      transition: 0.7s;
      opacity: 0.8;
    }

    &:hover .thumbnail {
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 992px) {
    .project-card {
      .card-content {
        height: 12%;
      }
      &:hover .card-content {
        height: 45%;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    .project-card {
      &:hover .card-content {
        height: 35%;
      }
    }
  }
}
</style>

<script>
export default {
  // ricevo il contenuto del progetto via props
  props: { project: Object },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {},
};
</script>

<template>
  <button @click="goBack" class="btn my-3" style="background-color: #fab005">
    Go to projects
  </button>
  <div class="card h-100">
    <div class="cover">
      <img :src="'../img/' + project.image + '.png'" class="card-img-top" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .card-btn {
    cursor: pointer;
    text-decoration: none;
  }
  .cover {
    position: relative;
    .badge.type {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    .tech {
      position: absolute;
      bottom: 15px;
      left: 15px;
    }
  }
}
</style>

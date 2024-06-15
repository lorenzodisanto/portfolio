<script>
export default {
  data() {
    return {
      name: null,
      text: null,
      image: null,
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },

  created() {
    const projectName = this.$route.params.slug;
    const projectDesc = this.$route.params.desc || history.state.desc;
    const projectImg = this.$route.params.img || history.state.img;
    this.name = projectName;
    this.text = projectDesc;
    this.image = projectImg;
  },
};
</script>

<template>
  <!-- stampa pagina dettaglio provvisoria -->
  <div class="container my-5">
    <div class="d-flex justify-content-between mb-3">
      <h1>{{ name }}</h1>
      <button
        @click="goBack"
        class="btn my-3"
        style="background-color: #f38f00; color: white"
      >
        Go to projects
      </button>
    </div>
    <div>
      <img :src="'/img/' + image + '.png'" class="img-fluid" />
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  font-weight: 600;
}
</style>

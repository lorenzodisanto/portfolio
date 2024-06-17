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
  <div class="container py-5">
    <div class="d-flex justify-content-between">
      <h1>{{ name }}</h1>
      <button
        @click="goBack"
        class="btn my-3"
        style="background-color: #d37c01; color: white"
      >
        <font-awesome-icon icon="fa-solid fa-left-long" /> Projects
      </button>
    </div>
    <div>
      <img :src="'/img/' + image + '.png'" class="img-fluid" />
    </div>
    <p class="mb-0">{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  font-weight: 600;
}
</style>

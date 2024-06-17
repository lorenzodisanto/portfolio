<script>
// importo la Card
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      projects: [
        {
          name: "BooHouse",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a semper metus. Pellentesque pharetra sodales arcu ut euismod. Donec vitae eros ac nulla finibus dapibus. Curabitur malesuada sagittis elit id accumsan. Mauris sit amet purus metus. Etiam in mollis ex, vitae posuere turpis. Morbi sodales mi eros, id pharetra ligula rhoncus et. Vivamus vitae ipsum porta dolor consectetur condimentum eu quis neque. Morbi tristique purus nulla, sed ultrices metus interdum sed. Nulla mauris sapien, cursus et bibendum at, mattis a sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ullamcorper vulputate nisi. Quisque ac rutrum tellus, sit amet posuere turpis. Praesent non nisi eu erat tristique placerat. Etiam ut lectus turpis.",
          image: "BooHouse",
        },
        {
          name: "Boolfolio",
          description:
            "Nullam convallis feugiat purus quis lacinia. Morbi tempor nulla nec pharetra fringilla. Donec odio justo, fermentum ac dolor vel, blandit tristique diam. Praesent sit amet vehicula dolor. Nulla id felis tortor. Sed vitae quam dolor. Nulla facilisi.",
          image: "Boolfolio",
        },
        {
          name: "AutoCar",
          description:
            "Ut placerat ultrices consequat. Proin porttitor leo massa, ac consectetur libero accumsan ac. Pellentesque tempus purus ultrices pellentesque dapibus. Maecenas et leo eros. Ut eget ante at turpis vehicula gravida et et nisl. Nunc quis libero nunc. Fusce molestie volutpat maximus. Nam rhoncus dolor non pellentesque semper. Proin leo arcu, sagittis ut tellus nec, tempus rhoncus augue. Vestibulum nec molestie libero, vitae dignissim dui. Quisque non turpis nibh. Donec scelerisque neque vel odio dignissim commodo. Integer in bibendum dui, laoreet commodo nunc.",
          image: "AutoCar",
        },
        {
          name: "Whatsapp",
          description:
            "Praesent ac odio et tortor congue pharetra. Pellentesque dapibus, enim in dapibus accumsan, dolor nisl sollicitudin erat, sit amet imperdiet libero augue vel sapien. Nam luctus tincidunt urna, vehicula dictum diam venenatis quis. Aliquam id quam et neque convallis lacinia. Nulla eget sollicitudin nisi, at pretium tortor. Aliquam porttitor odio sit amet urna posuere, sed vulputate justo lacinia. Vivamus feugiat in mi sed consectetur. Maecenas bibendum, mauris nec interdum ultricies, nisi dui rhoncus mauris, sed euismod ex eros in est. Suspendisse rutrum, sem non gravida pulvinar, ipsum enim accumsan augue, eu condimentum eros elit ut lectus.",
          image: "whatsapp",
        },
        {
          name: "Spotify",
          description: "Descrizione Spotify non disponibile",
          image: "Spotify",
        },
        {
          name: "Boolflix",
          description:
            "Ut placerat ultrices consequat. Proin porttitor leo massa, ac consectetur libero accumsan ac. Pellentesque tempus purus ultrices pellentesque dapibus. Maecenas et leo eros. Ut eget ante at turpis vehicula gravida et et nisl. Nunc quis libero nunc. Fusce molestie volutpat maximus. Nam rhoncus dolor non pellentesque semper. Proin leo arcu, sagittis ut tellus nec, tempus rhoncus augue. Vestibulum nec molestie libero, vitae dignissim dui. Quisque non turpis nibh. Donec scelerisque neque vel odio dignissim commodo. Integer in bibendum dui, laoreet commodo nunc.",
          image: "Boolflix",
        },
      ],
    };
  },

  components: { ProjectCard },

  methods: {},

  created() {},
};
</script>

<template>
  <main>
    <div class="container pb-5">
      <!-- griglia Card -->
      <div class="row row-cols-lg-2 row-cols-1 g-4">
        <project-card v-for="project in this.projects" :project="project" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

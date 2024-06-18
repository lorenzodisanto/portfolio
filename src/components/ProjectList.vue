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
            "Nullam convallis feugiat purus quis lacinia. Morbi tempor nulla nec pharetra fringilla. Donec odio justo, fermentum ac dolor vel, blandit tristique diam. Praesent sit amet vehicula dolor. Nulla id felis tortor. Sed vitae quam dolor. Nulla facilisi.",

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
            "Nullam convallis feugiat purus quis lacinia. Morbi tempor nulla nec pharetra fringilla. Donec odio justo, fermentum ac dolor vel, blandit tristique diam. Praesent sit amet vehicula dolor. Nulla id felis tortor. Sed vitae quam dolor. Nulla facilisi.",

          image: "AutoCar",
        },
        {
          name: "Whatsapp",
          description:
            "Nullam convallis feugiat purus quis lacinia. Morbi tempor nulla nec pharetra fringilla. Donec odio justo, fermentum ac dolor vel, blandit tristique diam. Praesent sit amet vehicula dolor. Nulla id felis tortor. Sed vitae quam dolor. Nulla facilisi.",

          image: "whatsapp",
        },
        {
          name: "Spotify",
          description: "Descrizione Spotify non disponibile",
          image: "Spotify",
        },
        {
          name: "Boolflix",
          description: "Descrizione Boolflix non disponibile",
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
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <project-card v-for="project in this.projects" :project="project" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

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
            "Team development of a web portal for finding and managing apartment rentals",
          tech: "Vue.js - Axios - Laravel - MySQL",
          category: "Fullstack",
          link: "https://github.com/MatteoOliva/vue-booHouse",
          image: "BooHouse",
        },
        {
          name: "Boolfolio",
          description:
            "Development of a portfolio presentation management system",
          tech: "Vue.js - Axios - Laravel - MySQL",
          category: "Fullstack",
          link: "https://github.com/lorenzodisanto/vite-boolfolio",
          image: "Boolfolio",
        },
        {
          name: "AutoCar",
          description:
            "A replica of a website, developed to master frontend skills",
          category: "Frontend",
          tech: "HTML - CSS - Vue.js - Sass",
          link: "https://github.com/lorenzodisanto/proj-html-vuejs",
          image: "AutoCar",
        },
        {
          name: "Boolzapp",
          description: "A WhatsApp clone created to improve frontend skills",
          category: "Frontend",
          tech: "HTML - CSS - Axios - Javascript",
          link: "https://github.com/lorenzodisanto/vue-boolzapp",
          image: "Boolzapp",
        },
        {
          name: "Spotify",
          description: "A replica of Spotify music",
          category: "Frontend",
          tech: "HTML - CSS",
          link: "https://github.com/lorenzodisanto/html-css-spotifyweb",
          image: "Spotify",
        },
        {
          name: "Boolflix",
          description:
            "A replica of a streaming app with movies and TV series detail retrieval",
          category: "Frontend",
          tech: "HTML - CSS - Vue.js - Axios",
          link: "https://github.com/lorenzodisanto/vite-boolflix",
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

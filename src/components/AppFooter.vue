<script>
export default {
  // ricevo l'autore dall'App via props
  props: { author: String },
};
</script>

<template>
  <footer>
    <nav class="navbar">
      <div class="container d-flex justify-content-between">
        <div>
          <span class="navbar-brand text-white" href="" target="_blank">
            &copy; 2024 {{ author }}
          </span>
        </div>
        <div class="social">
          <a
            href="https://www.linkedin.com/in/lorenzo-di-santo-454282266/"
            class="text-white"
            target="_blank"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" /> LinkedIn
          </a>
          <a
            href="https://github.com/lorenzodisanto"
            class="text-white"
            target="_blank"
          >
            <font-awesome-icon icon="fa-brands fa-github" /> GitHub
          </a>
          <a
            href="https://www.instagram.com/llor.ds/"
            class="text-white"
            target="_blank"
          >
            <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
          </a>
        </div>
      </div>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 56px;
  background-color: black;

  .social {
    font-size: 1rem;
    a {
      text-decoration: none;
      margin-left: 60px;
    }
  }
}
</style>

<script>
export default {
  // ricevo l'autore dall'App via props
  props: { author: String },
};
</script>

<template>
  <footer>
    <nav class="navbar">
      <div class="container">
        <a
          class="navbar-brand text-white"
          href="https://github.com/lorenzodisanto"
          target="_blank"
        >
          &copy; 2024 {{ author }}
        </a>
      </div>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 56px;
  background-color: black;
}
</style>

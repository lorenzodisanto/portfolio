<script>
export default {
  // ricevo titolo dall'App via props
  props: { title: String },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg text-bg-dark">
      <div class="container">
        <router-link
          :to="{ name: 'home' }"
          class="navbar-brand text-white fs-3"
        >
          {{ title }}
        </router-link>
        <button
          class="navbar-toggler border border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link text-white">
                About me
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'projects' }"
                class="nav-link text-white"
              >
                Projects
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'contact' }"
                class="nav-link text-white"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>

<script>
export default {
  // ricevo titolo dall'App via props
  props: { title: String },
};
</script>

<template>
  <header>
    <nav class="navMenu">
      <div
        class="container d-flex justify-content-between align-items-center py-3"
      >
        <div>
          <router-link
            :to="{ name: 'home' }"
            class="navbar-brand text-white fs-3"
          >
            {{ title }}
          </router-link>
        </div>
        <div>
          <router-link
            :to="{ name: 'about' }"
            class="options"
            active-class="active"
          >
            About
          </router-link>
          <router-link
            :to="{ name: 'projects' }"
            class="options"
            active-class="active"
          >
            Projects
          </router-link>
          <router-link
            :to="{ name: 'contact' }"
            class="options"
            active-class="active"
          >
            Contact
          </router-link>
          <div class="dot"></div>
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
  height: 67px;
  background-color: black;

  .navMenu a {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .navMenu .options {
    margin-left: 40px;
  }

  .navMenu .active {
    color: #d37c01;
  }

  .navMenu a:hover {
    color: #d37c01;
  }

  .navMenu .dot {
    width: 6px;
    height: 6px;
    background: #d37c01;
    border-radius: 50%;
    opacity: 0;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .navMenu a:nth-child(1):hover ~ .dot {
    -webkit-transform: translateX(65px);
    transform: translateX(65px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  .navMenu a:nth-child(2):hover ~ .dot {
    -webkit-transform: translateX(180px);
    transform: translateX(180px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  .navMenu a:nth-child(3):hover ~ .dot {
    -webkit-transform: translateX(310px);
    transform: translateX(310px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }
}
</style>

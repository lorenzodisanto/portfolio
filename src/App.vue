<script>
// importo header e footer e projectlist
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      title: ".diesse",
      author: "Lorenzo Di Santo",
    };
  },

  components: { AppHeader, AppFooter },
};
</script>

<template>
  <app-header :title="title"></app-header>
  <router-view></router-view>
  <app-footer :author="author"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

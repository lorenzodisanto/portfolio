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
  <div class="background">
    <router-view></router-view>
  </div>
  <app-footer :author="author"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
.background {
  background-color: #171b20;
}
</style>

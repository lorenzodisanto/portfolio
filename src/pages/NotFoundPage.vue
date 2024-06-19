<script>
export default {
  data() {
    return {
      title: "Error 404",
    };
  },
};
</script>

<template>
  <div class="container wrapper">
    <div>
      <h1 class="my-4">OOPS! YOU DON'T WANT TO BE HERE</h1>
      <h4>
        It looks like it's time to abort and go
        <router-link :to="{ name: 'home' }" class="fs-3" style="color: #ff5722">
          Home
        </router-link>
      </h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
}
h4 {
  font-size: 2rem;
}
a {
  text-decoration: none;
}
</style>

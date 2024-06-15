<script>
export default {
  data() {
    return {
      title: "About.",
    };
  },
};
</script>

<template>
  <div class="container my-5">
    <h1>{{ title }}</h1>
    <div class="wrapper">
      <div class="d-flex">
        <p class="me-5">
          Ut placerat ultrices consequat. Proin porttitor leo massa, ac
          consectetur libero accumsan ac. Pellentesque tempus purus ultrices
          pellentesque dapibus. Maecenas et leo eros. Ut eget ante at turpis
          vehicula gravida et et nisl. Nunc quis libero nunc. Fusce molestie
          volutpat maximus. Nam rhoncus dolor non pellentesque semper. Proin leo
          arcu, sagittis ut tellus nec, tempus rhoncus augue. Vestibulum nec
          molestie libero, vitae dignissim dui. Quisque non turpis nibh. Donec
          scelerisque neque vel odio dignissim commodo. Integer in bibendum dui,
          laoreet commodo nunc. Praesent ac odio et tortor congue pharetra.
          Pellentesque dapibus, enim in dapibus accumsan, dolor nisl
          sollicitudin erat, sit amet imperdiet libero augue vel sapien. Nam
          luctus tincidunt urna, vehicula dictum diam venenatis quis. Aliquam id
          quam et neque convallis lacinia. Nulla eget sollicitudin nisi, at
          pretium tortor. Aliquam porttitor odio sit amet urna posuere, sed
          vulputate justo lacinia. Vivamus feugiat in mi sed consectetur.
          Maecenas bibendum, mauris nec interdum ultricies, nisi dui rhoncus
          mauris, sed euismod ex eros in est. Suspendisse rutrum, sem non
          gravida pulvinar, ipsum enim accumsan augue, eu condimentum eros elit
          ut lectus.
        </p>
        <p>
          Mauris consectetur in dolor ac imperdiet. Sed volutpat hendrerit
          felis, nec laoreet nulla lobortis vitae. Nullam finibus turpis dui,
          eget convallis erat convallis ac. Ut et placerat purus. Maecenas
          fringilla velit et dapibus dapibus. Curabitur arcu nibh, bibendum a
          faucibus quis, lacinia at urna. Nunc eget nisi euismod, lacinia augue
          sed, feugiat nibh. Praesent ullamcorper odio a justo facilisis
          iaculis. Duis tempus massa eu magna fringilla facilisis. Quisque
          porttitor fermentum efficitur. Nulla vestibulum accumsan egestas. Nam
          ut dui quis arcu interdum aliquet vel eget ante.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
}
p {
  text-align: justify;
}
</style>

<script>
export default {
  data() {
    return {
      title: ".Contact",
    };
  },
};
</script>

<template>
  <div class="wrapper container py-5">
    <div class="contacts">
      <!-- <h1>{{ title }}</h1> -->
      <p>If you want to talk to me,</p>
      <p>you can send an email to me:</p>
      <p>
        <a href="mailto:lore.disanto95@gmail.com" style="color: #ff5722"
          >lore.disanto95@gmail.com</a
        >
      </p>
      <p>Visit my profiles v</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
}
.contacts {
  font-size: 2rem;
}
</style>

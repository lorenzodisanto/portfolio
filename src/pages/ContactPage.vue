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
  <div class="wrapper container">
    <h1 class="py-5">{{ title }}</h1>
    <div class="contacts">
      <p class="mb-3">If you want to talk to me,</p>
      <p class="mb-3">you can send an email to me:</p>
      <p>
        <a href="mailto:lore.disanto95@gmail.com" style="color: #ff5722"
          >lore.disanto95@gmail.com</a
        >
      </p>
      <a href="/src/assets/lorenzo_disanto_CV.pdf" download class="download-btn"
        >Download CV</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: block;
}
h1 {
  font-weight: 600;
}
.contacts {
  font-size: 1.3rem;
}

.download-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}

.download-btn:hover {
  font-size: 20px;
}
@media screen and (min-width: 576px) {
  .contacts {
    font-size: 2rem;
  }
}
</style>

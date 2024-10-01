<script>
export default {
  data() {
    return {
      title: ".About",
    };
  },
};
</script>

<template>
  <div class="container d-none d-lg-block">
    <h1 class="py-5">{{ title }}</h1>
    <div class="wrapper">
      <div class="d-flex justify-content-between">
        <div class="image">
          <div>
            <img src="../../public/img/me.jpg" alt="" />
          </div>
        </div>
        <div class="description">
          <p>
            Hi! I'm Lorenzo, a web developer with a passion for creating
            innovative and functional web experiences. My adventure in the world
            of web development started about a year ago and since then I have
            been fascinated by the endless possibilities that this field offers.
          </p>
          <p>
            I started my career as a programmer thanks to the Boolean
            Tech-Academy where I learned the basics of front-end, back-end
            programming and the use of MYSQL as well as the main development
            tools.
          </p>
          <p>
            I had the opportunity to work on several projects, both individually
            and in teams, which allowed me to hone my technical and
            collaborative skills.
          </p>
          <p>
            I am a curious and determined person and my goal is to continue to
            grow as a web developer, learning new technologies and constantly
            improving my skills.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container d-block d-lg-none">
    <div>
      <h1 class="pt-5 pb-4">{{ title }}</h1>
      <div>
        <div class="image-mobile pb-4">
          <div>
            <img src="../../public/img/me.jpg" alt="" />
          </div>
        </div>
        <div class="description-mobile">
          <p>
            Hi! I'm Lorenzo, a web developer with a passion for creating
            innovative and functional web experiences. My adventure in the world
            of web development started about a year ago and since then I have
            been fascinated by the endless possibilities that this field offers.
          </p>
          <p>
            I started my career as a programmer thanks to the Boolean
            Tech-Academy where I learned the basics of front-end, back-end
            programming and the use of MYSQL as well as the main development
            tools.
          </p>
          <p>
            I had the opportunity to work on several projects, both individually
            and in teams, which allowed me to hone my technical and
            collaborative skills.
          </p>
          <p class="mb-0 pb-4">
            I am a curious and determined person and my goal is to continue to
            grow as a web developer, learning new technologies and constantly
            improving my skills.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
}
.description {
  width: 50%;
  p {
    text-align: justify;
    margin-bottom: 20px;
    font-size: 1.3rem;
  }
}
.image {
  width: 50%;
  img {
    width: 60%;
  }
}

.image-mobile {
  width: 100%;
  text-align: center;
  img {
    width: 70%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      title: ".About",
      skills: [
        "HTML",
        "CSS",
        "SASS",
        "Bootstrap",
        "Javascript",
        "Vue.js",
        "Vite",
        "Axios",
        "PHP",
        "Laravel",
        "MySQL",
        "Git",
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 class="py-5">{{ title }}</h1>
    <div class="about-large">
      <div class="description">
        <p>
          Hi! I'm Lorenzo, a web developer with a passion for creating
          innovative and functional web experiences. My adventure in the world
          of web development started about a year ago and since then I have been
          fascinated by the endless possibilities that this field offers.
        </p>
        <p>
          I started my career as a programmer thanks to the Boolean Tech-Academy
          where I learned the basics of front-end, back-end programming and the
          use of MYSQL as well as the main development tools.
        </p>
        <p>
          I had the opportunity to work on several projects, both individually
          and in teams, which allowed me to hone my technical and collaborative
          skills.
        </p>
        <p>
          I am a curious and determined person and my goal is to continue to
          grow as a web developer, learning new technologies and constantly
          improving my skills.
        </p>
      </div>
      <div class="image">
        <div>
          <img src="../../public/img/me.jpg" alt="" />
        </div>
        <div class="skills pb-5">
          <h3 class="mt-5">.My Skills</h3>
          <div v-for="skill in this.skills" class="skill-badge mt-3">
            {{ skill }}
          </div>
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
  p {
    text-align: justify;
    margin-bottom: 20px;
    font-size: 1rem;
  }
}
.image {
  text-align: center;
  img {
    width: 60%;
    border-radius: 50%;
  }
  .skills {
    text-align: start;
    .skill-badge {
      display: inline-block;
      padding: 7px 15px;
      margin-right: 10px;
      border: 1px solid #ff5722;
      text-align: center;
      text-decoration: none;
      border-radius: 10px;
      font-size: 0.8rem;
    }
  }
}

@media screen and (min-width: 992px) {
  .about-large {
    display: flex;
    flex-direction: row-reverse;

    .image {
      img {
        width: 70%;
      }
    }
    p {
      font-size: 1.2rem;
    }
    .skills {
      width: 80%;
      .skill-badge {
        font-size: 1rem;
      }
    }
  }
}
</style>

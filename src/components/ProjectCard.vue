<script>
export default {
  // ricevo il contenuto del progetto via props
  props: { project: Object },

  computed: {},
};
</script>

<template>
  <div class="col">
    <div class="project-card">
      <div class="thumbnail">
        <img :src="'../img/' + project.image + '.png'" class="img-fluid" />
      </div>
      <div class="card-content">
        <span class="category">Category</span>
        <div class="title">
          <h3>{{ project.name }}</h3>
          <span class="link"
            ><a :href="project.link" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" /></a
          ></span>
        </div>

        <p class="description pt-2">{{ project.description }}</p>
        <p class="tech">{{ project.tech }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  .project-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    .thumbnail {
      width: 100%;
    }

    .card-content {
      width: 100%;
      background-color: #2d4059;
      transition: 0.7s;
      padding: 0 10px;
      position: absolute;
      bottom: 0;
      height: 15%;

      .category {
        height: 30px;
        padding: 0 10px;
        position: absolute;
        background-color: #ff5722;
        top: -30px;
        right: 0;
      }

      .title {
        display: flex;
        margin-top: 2px;
      }
      .link {
        font-size: 1.6rem;
        padding-left: 20px;

        a {
          text-decoration: none;
          color: #eeeeee;
        }
      }
      .link a:hover {
        color: #ff5722;
      }

      .tech {
        color: #ff5722;
        font-size: 1rem;
      }
    }
    &:hover .card-content {
      height: 60%;
      transition: 0.7s;
      opacity: 0.8;
    }

    &:hover .thumbnail {
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 510px) {
    .project-card {
      .card-content {
        height: 12%;
      }
      &:hover .card-content {
        height: 40%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .project-card {
      .card-content {
        h3 {
          font-size: 1.5rem;
        }
        .link {
          font-size: 1.3rem;
        }
      }
      &:hover .card-content {
        height: 65%;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .project-card {
      &:hover .card-content {
        height: 40%;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    .project-card {
      &:hover .card-content {
        height: 30%;
      }

      .description {
        margin-top: 5px;
      }
    }
  }
}
</style>

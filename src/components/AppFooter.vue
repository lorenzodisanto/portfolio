<script>
export default {
  // ricevo l'autore dall'App via props
  props: { author: String },
};
</script>

<template>
  <footer>
    <nav>
      <div class="container">
        <div class="name">
          <span class="text-white" href="" target="_blank">
            &copy; {{ author }} 2024
          </span>
        </div>
        <div class="social">
          <div>
            <a href="https://github.com/lorenzodisanto" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/lorenzo-di-santo-454282266/"
              target="_blank"
            >
              <font-awesome-icon icon="fa-brands fa-linkedin" />
              LinkedIn
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/llor.ds/" target="_blank">
              <font-awesome-icon icon="fa-brands fa-instagram" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 200px;
  background-color: #171b20;

  .name {
    width: 100%;
    text-align: center;
    padding-top: 8px;
    margin-bottom: 8px;
    font-size: 1.2rem;
  }
  .social {
    width: 100%;
    text-align: center;
    div {
      margin-top: 20px;
      a {
        text-decoration: none;
        font-size: 1.2rem;
        color: #eeeeee;
      }
    }
  }

  .social a:hover {
    color: #ff5722;
  }
}

@media screen and (min-width: 992px) {
  footer {
    height: 65px;

    .container {
      display: flex;
      justify-content: space-between;

      .name {
        text-align: start;
        width: 50%;
        padding-top: 20px;
        margin-bottom: 0px;
      }
      .social {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        div {
          margin-left: 35px;
        }
      }
    }
  }
}
</style>

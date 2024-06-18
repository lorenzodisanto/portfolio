<script>
export default {
  // ricevo l'autore dall'App via props
  props: { author: String },
};
</script>

<template>
  <footer>
    <nav class="navbar">
      <div class="container">
        <div class="name">
          <span class="navbar-brand text-white" href="" target="_blank">
            &copy; {{ author }} 2024
          </span>
        </div>
        <div class="social">
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
            <a href="https://github.com/lorenzodisanto" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
              GitHub
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
    margin: 8px 0px;
  }
  .social {
    width: 100%;
    text-align: center;
    div {
      margin: 10px 0px;
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
    height: 56px;

    .container {
      display: flex;
      justify-content: space-between;

      .name {
        text-align: start;
        width: 50%;
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

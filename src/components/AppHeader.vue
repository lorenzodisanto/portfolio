<script>
export default {
  // ricevo titolo dall'App via props
  props: { title: String },
};
</script>

<template>
  <header>
    <nav class="navMenu">
      <div
        class="container d-flex justify-content-between align-items-center py-3"
      >
        <div>
          <router-link
            :to="{ name: 'home' }"
            class="fs-3"
            style="color: #ff5722"
          >
            {{ title }}
          </router-link>
        </div>

        <!-- HEADER DESKTOP-TABLET MODE -->
        <div class="d-none d-sm-block">
          <router-link
            :to="{ name: 'about' }"
            class="options"
            active-class="active"
          >
            About
          </router-link>
          <router-link
            :to="{ name: 'projects' }"
            class="options"
            active-class="active"
          >
            Projects
          </router-link>
          <router-link
            :to="{ name: 'contact' }"
            class="options"
            active-class="active"
          >
            Contact
          </router-link>
          <div class="dot"></div>
        </div>

        <!-- HEADER MOBILE MODE -->
        <div class="d-sm-none">
          <input type="checkbox" id="active" />
          <label for="active" class="menu-btn"><span></span></label>
          <label for="active" class="close"></label>
          <div class="wrapper-menu">
            <ul>
              <li>
                <router-link
                  :to="{ name: 'about' }"
                  class="options"
                  active-class="active"
                >
                  About
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'projects' }"
                  class="options"
                  active-class="active"
                >
                  Projects
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'contact' }"
                  class="options"
                  active-class="active"
                >
                  Contact
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 67px;
  background-color: #171b20;

  .navMenu a {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .navMenu .options {
    margin-left: 40px;
  }

  .navMenu .active {
    color: #ff5722;
  }

  .navMenu a:hover {
    color: #ff5722;
  }

  .navMenu .dot {
    width: 6px;
    height: 6px;
    background: #ff5722;
    border-radius: 50%;
    opacity: 0;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .navMenu a:nth-child(1):hover ~ .dot {
    -webkit-transform: translateX(65px);
    transform: translateX(65px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  .navMenu a:nth-child(2):hover ~ .dot {
    -webkit-transform: translateX(180px);
    transform: translateX(180px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  .navMenu a:nth-child(3):hover ~ .dot {
    -webkit-transform: translateX(310px);
    transform: translateX(310px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  // HAMBURGER MENU
  .wrapper-menu {
    position: fixed;
    top: 0;
    /*left: -100%;*/
    right: -100%;
    height: 100%;
    width: 100%;
    background: #2d4059;
    /*background: linear-gradient(90deg, #f92c78, #4114a1);*/
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
    /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%);*/
    transition: all 0.6s ease-in-out;
  }
  #active:checked ~ .wrapper-menu {
    /*left: 0;*/
    right: 0;
  }

  #close:checked ~ .wrapper-menu {
    left: 0;
  }

  .menu-btn {
    position: absolute;
    z-index: 2;
    right: 0px;
    /*left: 20px; */
    top: 10px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    color: white;
    /*background: linear-gradient(90deg, #f92c78, #4114a1);*/
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
    /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
    transition: all 0.3s ease-in-out;
  }
  .menu-btn span,
  .menu-btn:before,
  .menu-btn:after {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 30%;
    width: 40%;
    border-bottom: 2px solid white;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .menu-btn:before {
    transform: translateY(-8px);
  }
  .menu-btn:after {
    transform: translateY(8px);
  }

  .close {
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    // transition: background 0.6s;
  }

  /* closing animation */
  #active:checked + .menu-btn span {
    transform: scaleX(0);
  }
  #active:checked + .menu-btn:before {
    transform: rotate(45deg);
    border-color: #fff;
  }
  #active:checked + .menu-btn:after {
    transform: rotate(-45deg);
    border-color: #fff;
  }
  .wrapper-menu ul {
    position: absolute;
    top: 60%;
    left: 10%;
    height: 100%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }
  .wrapper-menu ul li {
    height: 10%;
    margin: 15px 0;
  }
  .wrapper-menu ul li a {
    text-decoration: none;
    font-size: 30px;
    padding: 5px 30px;
    color: #fff;
    border-radius: 50px;
    position: absolute;
    line-height: 50px;
    margin: 5px 30px;
    opacity: 0;
    transition: all 0.3s ease;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .wrapper-menu ul li a:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50px;
    transform: scaleY(0);
    z-index: -1;
    transition: transform 0.3s ease;
  }
  .wrapper-menu ul li a:hover:after {
    transform: scaleY(1);
  }
  .wrapper-menu ul li a:hover {
    color: #ff5722;
  }
  input[type="checkbox"] {
    display: none;
  }

  #active:checked ~ .wrapper-menu ul li a {
    opacity: 1;
  }
  .wrapper-menu ul li a {
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100px);
  }
  #active:checked ~ .wrapper-menu ul li a {
    transform: none;
    transition-timing-function: ease, cubic-bezier(0.1, 1.3, 0.3, 1);
    transition-delay: 0.6s;
    transform: translateX(-100px);
  }
}
</style>

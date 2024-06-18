import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import BlogPage from "./pages/BlogPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: BlogPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
  ],
});

export { router };

import { createApp } from "vue";

import App from "./App.vue";

import { router } from "./router";

import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Importa il file CSS per gli stili

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLeftLong, faLinkedin, faInstagram, faGithub);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

// Inizia il progress quando la navigazione inizia
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

// Termina il progress quando la navigazione è completata
router.afterEach(() => {
  NProgress.done();
});

app.mount("#app");

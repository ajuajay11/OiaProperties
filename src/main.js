import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "lenis/dist/lenis.css";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
app.use(router);
app.use(vuetify)
app.mount("#app");

// Initialize AOS only
router.isReady().then(() => {
  setTimeout(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, 100);
});
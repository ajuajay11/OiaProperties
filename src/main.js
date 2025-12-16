import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Lenis from "lenis";
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

// Wait for router to be ready
router.isReady().then(() => {
  // Use setTimeout to ensure DOM is fully rendered
  setTimeout(() => {
    const wrapper = document.querySelector(".scroll-wrapper");
    if (!wrapper) {
      console.error("Scroll wrapper not found!");
      return;
    }
    const lenis = new Lenis({
      wrapper,
      content: wrapper.firstElementChild,
      autoRaf: true,
    });
    app.config.globalProperties.$lenis = lenis;
    window.lenis = lenis;

    // Initialize AOS after Lenis
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // animate only once
      offset: 80,
    });

    // Refresh AOS on Lenis scroll
    lenis.on('scroll', () => {
      AOS.refresh();
    });
  }, 100);
});
 
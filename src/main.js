import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(router);
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
  }, 100);
});
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true, // animate only once
  offset: 120,
});

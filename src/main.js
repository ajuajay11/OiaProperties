import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import router from "./router/index";
import Lenis from '@studio-freight/lenis'

const app = createApp(App);

app.use(Fancybox);
app.use(router);

const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Optional: make available globally
app.config.globalProperties.$lenis = lenis

app.mount("#app");

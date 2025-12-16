import { createMemoryHistory, createRouter } from "vue-router";

import HomeLayout from "../Layouts/HomeLayouts.vue";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: HomeLayout,
    name: "Layouts",
    children: [{ path: "", component: HomeView, name: "home" }],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;

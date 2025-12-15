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
});

export default router;

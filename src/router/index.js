import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Manage from "@/views/Manage.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/manage-music",
    meta: {
      requiresAuth: true,
    },
    name: "Manage",
    // alias: "/manage",
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log("Manage guard");
      next();
    },
  },
  {
    path: "/manage",
    redirect: { name: "Manage" },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});
router.beforeEach((to, from, next) => {
  // console.log(to.matched);
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: "Home" });
  }
});

export default router;

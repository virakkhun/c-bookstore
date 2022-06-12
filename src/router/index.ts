import { createRouter, createWebHistory } from "vue-router";

import userHome from "../views/index.vue";
import loginOrRegister from "../views/users/login_register.vue";
import errorPageNotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: userHome,
    meta: {
      title: "Home",
      requireAuth: false,
    },
  },
  {
    path: "/login_register",
    name: "login_register",
    component: loginOrRegister,
    meta: {
      title: "Login | Register",
    },
  },
  {
    path: "/404",
    name: "page-not-found",
    component: errorPageNotFound,
    meta: {
      title: "Page Not Found",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Book Store`;
  next();
});

/**
 * For Authenticated user only
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/login_register");
    }
  } else {
    next();
  }
});

export default router;

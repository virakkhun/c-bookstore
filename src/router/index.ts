import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/layouts/default.vue";
import AuthLayout from "../components/layouts/auth.vue";
import userHome from "../views/index.vue";
import loginOrRegister from "../views/users/login_register.vue";
import errorPageNotFound from "../views/404.vue";
import IndexBook from "../views/books/index.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: userHome,
        meta: {
          title: "Home",
          requireAuth: true,
        },
      },
      {
        path: "/books",
        name: "index.book",
        component: IndexBook,
        meta: {
          title: "Books",
          requireAuth: true,
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
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "/login_register",
        component: loginOrRegister,
        meta: {
          title: "Login | Register",
        },
      },
    ],
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
      next("/");
    }
  } else {
    next();
  }
});

export default router;

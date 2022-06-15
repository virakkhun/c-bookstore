import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/layouts/default.vue";
import AuthLayout from "../components/layouts/auth.vue";
import userHome from "../views/index.vue";
import errorPageNotFound from "../views/404.vue";
import indexBook from "../views/books/index.vue";
import login from "../views/auth/login.vue";
import register from "../views/auth/register.vue";
import userProfile from "../views/users/index.vue";

const routes = [
  {
    path: "/home",
    component: DefaultLayout,
    children: [
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
        path: "/books",
        name: "book",
        component: indexBook,
        meta: {
          title: "Books",
          requireAuth: true,
        },
      },
      {
        path: "/profile",
        name: "profileUser",
        component: userProfile,
        meta: {
          title: "Profile",
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
        path: "/login",
        component: login,
        meta: {
          title: "Login",
        },
      },
      {
        path: "/register",
        component: register,
        meta: {
          title: "Register",
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
      next("/login");
    }
  } else {
    next();
  }
});

export default router;

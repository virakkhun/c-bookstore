import { createRouter, createWebHistory } from "vue-router";

import userHome from '../views/users/index.vue'
import userEdit from '../views/users/edit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: userHome
  },
  {
    path: '/edit',
    name: 'edit',
    component: userEdit
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
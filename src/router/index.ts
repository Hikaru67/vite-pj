import { createRouter, createWebHistory } from 'vue-router'
import Facebook from '/src/components/Facebook.vue'

const routes = [
  {
    path: '/',
    name: 'Facebook',
    component: Facebook
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing Page',
      component: () => import('@/pages/a_landing/index.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/index.vue'),
      // meta: { requiresAuth: true },
    },
  ],
})

export default router

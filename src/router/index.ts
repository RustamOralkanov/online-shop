import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: () => import('../views/CatalogPage.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartPage.vue')
    }
  ]
})

export default router

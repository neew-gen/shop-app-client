import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { catalogRoutes } from '@/router/modules/catalog'
import { adminPanelRoutes } from '@/router/modules/admin-panel'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...catalogRoutes,
  ...adminPanelRoutes,
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: (): any =>
      import(
        /* webpackChunkName: "shopping-cart" */ '../views/ShoppingCart.vue'
      )
  },
  {
    path: '/profile',
    name: 'Profile',
    component: (): any =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

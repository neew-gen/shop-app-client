import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { publicLayoutRoutes } from '@/router/public-layout'
import { adminLayoutRoutes } from '@/router/admin-layout'

const routes: Array<RouteRecordRaw> = [
  ...publicLayoutRoutes,
  ...adminLayoutRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

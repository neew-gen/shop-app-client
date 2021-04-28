// import { isLoggedIn } from 'axios-jwt'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { adminLayoutRoutes } from '@/router/admin-layout'
import { authLayoutRoutes } from '@/router/auth-layout'
import { publicLayoutRoutes } from '@/router/public-layout'

const routes: Array<RouteRecordRaw> = [
  ...publicLayoutRoutes,
  ...adminLayoutRoutes,
  ...authLayoutRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((route) => route.meta.requiresAuth)
//   if (!requiresAuth) return next()
//   if (isLoggedIn()) return next()
//   sessionStorage.setItem('redirectPathAfterAuth', to.path)
//   next('/auth')
// })

export default router

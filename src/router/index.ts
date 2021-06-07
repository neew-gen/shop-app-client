import { isLoggedIn } from 'axios-jwt'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { adminLayoutRoutes } from '@/router/admin-layout'
import { authLayoutRoutes } from '@/router/auth-layout'
import { publicLayoutRoutes } from '@/router/public-layout'
import { getLocalItem } from '@/services/LocalStorageService/LocalStorageService'

const routes: Array<RouteRecordRaw> = [
  ...publicLayoutRoutes,
  ...adminLayoutRoutes,
  ...authLayoutRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAdminAuth = to.matched.some(
    (route) => route.meta.requiresAdminAuth,
  )
  if (!requiresAdminAuth) return next()
  const userRoles = getLocalItem<string[]>('userRoles')
  if (!userRoles) return next('/auth/admin-login')
  const isAdmin = userRoles.includes('admin')
  if (!isAdmin) return next('/auth/admin-login')
  if (isLoggedIn() && isAdmin) return next()
  // sessionStorage.setItem('redirectPathAfterAuth', to.path)
})

export default router

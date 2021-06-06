// import { isLoggedIn } from 'axios-jwt'
//
// import router from '@/router'
// import { getLocalItem } from '@/services/LocalStorageService/LocalStorageService'
//
// router.beforeEach((to, from, next) => {
//   const requiresAdminAuth = to.matched.some(
//     (route) => route.meta.requiresAdminAuth,
//   )
//   if (!requiresAdminAuth) return next()
//   const userRoles = getLocalItem<string[]>('userRoles')
//   if (!userRoles) return next('/auth/admin-login')
//   const isAdmin = userRoles.includes('admin')
//   if (isLoggedIn() && isAdmin) return next()
//   // sessionStorage.setItem('redirectPathAfterAuth', to.path)
// })

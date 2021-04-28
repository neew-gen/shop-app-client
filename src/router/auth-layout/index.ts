import { RouteRecordRaw } from 'vue-router'

export const authLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    redirect: '/auth/login',
    name: 'AuthLayout',
    component: (): any =>
      import(/* webpackChunkName: "auth" */ '@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/auth/login',
        name: 'login',
        component: (): any =>
          import(
            /* webpackChunkName: "login" */ '@/views/auth-layout/login/login.vue'
          ),
      },
      {
        path: '/auth/registration',
        name: 'registration',
        component: (): any =>
          import(
            /* webpackChunkName: "registration" */ '@/views/auth-layout/registration/registration.vue'
          ),
      },
    ],
  },
]

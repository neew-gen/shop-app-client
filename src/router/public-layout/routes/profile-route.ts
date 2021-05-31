import { RouteRecordRaw } from 'vue-router'

export const profileRoute: Array<RouteRecordRaw> = [
  {
    path: '/profile',
    name: 'profile',
    component: (): any =>
      import(
        /* webpackChunkName: "profile" */ '@/views/public-layout/profile/profile.vue'
      ),
  },
]

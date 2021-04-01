import { RouteRecordRaw } from 'vue-router'

export const profileChildren: Array<RouteRecordRaw> = [
  {
    path: '/profile',
    name: 'Profile',
    component: (): any =>
      import(
        /* webpackChunkName: "profile" */ '@/views/public-layout/Profile.vue'
      )
  }
]

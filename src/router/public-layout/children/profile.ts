import { RouteRecordRaw } from 'vue-router'

export const profileChildren: Array<RouteRecordRaw> = [
  {
    path: '/profile',
    name: 'profile',
    component: (): any =>
      import(
        /* webpackChunkName: "profile" */ '@/views/public-layout/profile/profile.vue'
      ),
  },
]

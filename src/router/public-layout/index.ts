import { RouteRecordRaw } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import Home from '@/views/public-layout/home/Home.vue'
import { catalogChildren } from '@/router/public-layout/children/catalog'
import { cartChildren } from '@/router/public-layout/children/cart'
import { profileChildren } from '@/router/public-layout/children/profile'

export const publicLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PublicLayout',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      ...catalogChildren,
      ...cartChildren,
      ...profileChildren,
    ],
  },
]

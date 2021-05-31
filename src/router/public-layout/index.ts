import { RouteRecordRaw } from 'vue-router'

import PublicLayout from '@/layouts/PublicLayout.vue'
import { cartRoute } from '@/router/public-layout/routes/cart-route'
import { catalogRoute } from '@/router/public-layout/routes/catalog-route'
import { homeRoute } from '@/router/public-layout/routes/home-route'
import { profileRoute } from '@/router/public-layout/routes/profile-route'

export const publicLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PublicLayout',
    component: PublicLayout,
    children: [...homeRoute, ...catalogRoute, ...cartRoute, ...profileRoute],
  },
]

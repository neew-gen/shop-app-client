import { RouteRecordRaw } from 'vue-router'

import { categoryRoute } from '@/router/admin-layout/routes/category-route'
import { productRoute } from '@/router/admin-layout/routes/product-route'
import { swipeRoute } from '@/router/admin-layout/routes/swipe-route'

export const adminLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel',
    name: 'AdminLayout',
    component: (): any =>
      import(/* webpackChunkName: "admin-panel" */ '@/layouts/AdminLayout.vue'),
    meta: {
      requiresAdminAuth: true,
    },
    children: [
      {
        path: '',
        name: 'admin-home',
        component: (): any =>
          import(
            /* webpackChunkName: "admin-panel-home" */ '@/views/admin-layout/admin-home.vue'
          ),
      },
      ...productRoute,
      ...categoryRoute,
      ...swipeRoute,
    ],
  },
]

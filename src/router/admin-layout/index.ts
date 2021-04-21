import { RouteRecordRaw } from 'vue-router'
import { productChildren } from '@/router/admin-layout/children/product'
import { categoryChildren } from '@/router/admin-layout/children/category'
import { swipeChildren } from '@/router/admin-layout/children/swipe'

export const adminLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel',
    name: 'AdminLayout',
    component: (): any =>
      import(/* webpackChunkName: "admin-panel" */ '@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: (): any =>
          import(
            /* webpackChunkName: "admin-panel-home" */ '@/views/admin-layout/admin-home.vue'
          ),
      },
      ...productChildren,
      ...categoryChildren,
      ...swipeChildren,
    ],
  },
]

import { RouteRecordRaw } from 'vue-router'
import { productChildren } from '@/router/modules/admin-panel/productChildren'
import { categoryChildren } from '@/router/modules/admin-panel/categoryChildren'

export const adminPanelRoutes: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel',
    name: 'AdminPanel',
    component: (): any =>
      import(
        /* webpackChunkName: "admin-panel" */ '@/views/admin-panel/index.vue'
      ),
    children: [
      {
        path: '',
        name: 'AdminPanelHome',
        component: (): any =>
          import(
            /* webpackChunkName: "admin-panel-home" */ '@/views/admin-panel/AdminPanelHome.vue'
          )
      },
      ...productChildren,
      ...categoryChildren
    ]
  }
]

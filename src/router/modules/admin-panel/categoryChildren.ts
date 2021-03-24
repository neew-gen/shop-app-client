import { RouteRecordRaw } from 'vue-router'

export const categoryChildren: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-category',
    name: 'CreateCategory',
    component: (): any =>
      import(
        /* webpackChunkName: "create-category" */ '@/views/admin-panel/category/CreateCategory.vue'
      )
  }
]

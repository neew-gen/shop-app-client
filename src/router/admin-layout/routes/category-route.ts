import { RouteRecordRaw } from 'vue-router'

export const categoryRoute: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-category',
    name: 'create-category',
    component: (): any =>
      import(
        /* webpackChunkName: "create-category" */ '@/views/admin-layout/category/create-category.vue'
      ),
  },
  {
    path: '/admin-panel/edit-categories',
    name: 'edit-categories',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-categories-list" */ '@/views/admin-layout/category/edit-categories.vue'
      ),
  },
  {
    path: '/admin-panel/edit-categories/:id',
    name: 'edit-category',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-category" */ '@/views/admin-layout/category/edit-category.vue'
      ),
    props: true,
  },
]

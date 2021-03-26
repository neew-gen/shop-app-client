import { RouteRecordRaw } from 'vue-router'

export const categoryChildren: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-category',
    name: 'CreateCategory',
    component: (): any =>
      import(
        /* webpackChunkName: "create-category" */ '@/views/admin-panel/category/CreateCategory.vue'
      )
  },
  {
    path: '/admin-panel/edit-categories',
    name: 'EditCategoriesList',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-categories-list" */ '@/views/admin-panel/category/EditCategoriesList.vue'
      )
  },
  {
    path: '/admin-panel/edit-categories/:id',
    name: 'EditCategorySuspense',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-product" */ '@/views/admin-panel/category/EditCategorySuspense.vue'
      ),
    props: true
  }
]

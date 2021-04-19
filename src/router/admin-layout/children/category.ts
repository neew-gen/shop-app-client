import { RouteRecordRaw } from 'vue-router'

export const categoryChildren: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-category',
    name: 'CreateCategory',
    component: (): any =>
      import(
        /* webpackChunkName: "create-category" */ '@/views/admin-layout/category/CreateCategory.vue'
      ),
  },
  {
    path: '/admin-panel/edit-categories',
    name: 'EditCategoriesList',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-categories-list" */ '@/views/admin-layout/category/EditCategoriesList.vue'
      ),
  },
  {
    path: '/admin-panel/edit-categories/:id',
    name: 'EditCategorySuspense',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-product" */ '@/views/admin-layout/category/EditCategorySuspense.vue'
      ),
    props: true,
  },
]

import { RouteRecordRaw } from 'vue-router'

export const productChildren: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-product',
    name: 'CreateProduct',
    component: (): any =>
      import(
        /* webpackChunkName: "create-product" */ '@/views/admin-panel/CreateProduct.vue'
      )
  },
  {
    path: '/admin-panel/edit-products',
    name: 'EditProductsList',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-products-list" */ '@/views/admin-panel/EditProductsList.vue'
      )
  },
  {
    path: '/admin-panel/edit-products/:id',
    name: 'EditProduct',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-product" */ '@/views/admin-panel/EditProduct.vue'
      ),
    props: true
  }
]

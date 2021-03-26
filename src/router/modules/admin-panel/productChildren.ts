import { RouteRecordRaw } from 'vue-router'

export const productChildren: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-product',
    name: 'CreateProduct',
    component: (): any =>
      import(
        /* webpackChunkName: "create-product" */ '@/views/admin-panel/product/CreateProduct.vue'
      )
  },
  {
    path: '/admin-panel/edit-products',
    name: 'EditProductsList',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-products-list" */ '@/views/admin-panel/product/EditProductsList.vue'
      )
  },
  {
    path: '/admin-panel/edit-products/:id',
    name: 'EditProductSuspense',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-product" */ '@/views/admin-panel/product/EditProductSuspense.vue'
      ),
    props: true
  }
]

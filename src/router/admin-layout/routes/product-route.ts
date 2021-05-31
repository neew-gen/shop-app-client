import { RouteRecordRaw } from 'vue-router'

export const productRoute: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-product',
    name: 'create-product',
    component: (): any =>
      import(
        /* webpackChunkName: "create-product" */ '@/views/admin-layout/product/create-product.vue'
      ),
  },
  {
    path: '/admin-panel/edit-products',
    name: 'edit-products',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-products" */ '@/views/admin-layout/product/edit-products.vue'
      ),
  },
  {
    path: '/admin-panel/edit-products/:id',
    name: 'edit-product',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-product" */ '@/views/admin-layout/product/edit-product.vue'
      ),
    props: true,
  },
]

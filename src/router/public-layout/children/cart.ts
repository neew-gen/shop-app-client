import { RouteRecordRaw } from 'vue-router'

export const cartChildren: Array<RouteRecordRaw> = [
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: (): any =>
      import(
        /* webpackChunkName: "cart" */ '@/views/public-layout/ShoppingCart.vue'
      )
  }
]

import { RouteRecordRaw } from 'vue-router'

export const cartChildren: Array<RouteRecordRaw> = [
  {
    path: '/shopping-cart',
    name: 'Cart',
    component: (): unknown =>
      import(
        /* webpackChunkName: "shopping-cart" */ '@/views/public-layout/cart/cart.vue'
      ),
  },
]

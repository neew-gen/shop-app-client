import { RouteRecordRaw } from 'vue-router'

export const cartRoute: Array<RouteRecordRaw> = [
  {
    path: '/shopping-cart',
    name: 'Cart',
    component: (): unknown =>
      import(
        /* webpackChunkName: "shopping-cart" */ '@/views/public-layout/cart/cart.vue'
      ),
  },
]

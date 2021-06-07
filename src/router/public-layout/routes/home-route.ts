import { RouteRecordRaw } from 'vue-router'

export const homeRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: (): any =>
      import(
        /* webpackChunkName: "home" */ '@/views/public-layout/home/home.vue'
      ),
    children: [
      {
        path: '',
        name: 'home-main',
        component: (): any =>
          import(
            /* webpackChunkName: "home-main" */ '@/views/public-layout/home/home-main.vue'
          ),
      },
      {
        path: 'search',
        name: 'home-search',
        component: (): any =>
          import(
            /* webpackChunkName: "home-search" */ '@/views/public-layout/home/home-search.vue'
          ),
      },
      {
        path: '/:sortParameter',
        name: 'home-products',
        component: (): any =>
          import(
            /* webpackChunkName: "home-products" */ '@/views/public-layout/home/home-products.vue'
          ),
        props: true,
      },
      {
        path: '/:sortParameter/:_id',
        name: 'home-product',
        component: (): any =>
          import(
            /* webpackChunkName: "home-product" */ '@/views/public-layout/home/home-product.vue'
          ),
        props: true,
      },
    ],
  },
]

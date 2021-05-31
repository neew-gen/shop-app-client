import { RouteRecordRaw } from 'vue-router'

export const homeRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: (): any =>
      import(
        /* webpackChunkName: "catalog" */ '@/views/public-layout/home/home.vue'
      ),
    children: [
      {
        path: '',
        name: 'home-main',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-categories" */ '@/views/public-layout/home/home-main.vue'
          ),
      },
      {
        path: 'search',
        name: 'home-search',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-categories" */ '@/views/public-layout/home/home-search.vue'
          ),
      },
    ],
  },
]

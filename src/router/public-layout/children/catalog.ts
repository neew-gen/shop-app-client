import { RouteRecordRaw } from 'vue-router'

export const catalogChildren: Array<RouteRecordRaw> = [
  {
    path: '/catalog',
    name: 'Catalog',
    component: (): any =>
      import(
        /* webpackChunkName: "catalog" */ '@/views/public-layout/catalog/catalog.vue'
      ),
    children: [
      {
        path: '',
        name: 'catalog-categories',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-categories" */ '@/views/public-layout/catalog/catalog-categories.vue'
          ),
      },
      {
        path: '/catalog/:categoryId',
        name: 'catalog-products',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-products" */ '@/views/public-layout/catalog/catalog-products.vue'
          ),
        props: true,
      },
      {
        path: '/catalog/:categoryId/:_id',
        name: 'catalog-product',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-product" */ '@/views/public-layout/catalog/catalog-product.vue'
          ),
        props: true,
      },
    ],
  },
]

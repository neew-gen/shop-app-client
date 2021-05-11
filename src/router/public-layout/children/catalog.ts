import { RouteRecordRaw } from 'vue-router'

export const catalogChildren: Array<RouteRecordRaw> = [
  {
    path: '/catalog',
    name: 'Catalog',
    component: (): unknown =>
      import(
        /* webpackChunkName: "catalog" */ '@/views/public-layout/catalog/Catalog.vue'
      ),
    children: [
      {
        path: '',
        name: 'CatalogCategories',
        component: (): unknown =>
          import(
            /* webpackChunkName: "catalog-categories" */ '@/views/public-layout/catalog/CatalogCategories.vue'
          ),
      },
      {
        path: '/catalog/:categoryId',
        name: 'CatalogProducts',
        component: (): unknown =>
          import(
            /* webpackChunkName: "catalog-products" */ '@/views/public-layout/catalog/catalog-products.vue'
          ),
        props: true,
      },
      {
        path: '/catalog/:categoryId/:id',
        name: 'CatalogProduct',
        component: (): unknown =>
          import(
            /* webpackChunkName: "catalog-product" */ '@/views/public-layout/catalog/CatalogProduct.vue'
          ),
        props: true,
      },
    ],
  },
]

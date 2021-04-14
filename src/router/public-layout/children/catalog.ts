import { RouteRecordRaw } from 'vue-router'

export const catalogChildren: Array<RouteRecordRaw> = [
  {
    path: '/catalog',
    name: 'Catalog',
    component: (): any =>
      import(
        /* webpackChunkName: "catalog" */ '@/views/public-layout/catalog/Catalog.vue'
      ),
    children: [
      {
        path: '',
        name: 'CategoriesSuspense',
        component: (): any =>
          import(
            /* webpackChunkName: "categories-list" */ '@/views/public-layout/catalog/CatalogCategories.vue'
          )
      },
      {
        path: '/catalog/:categoryId',
        name: 'ProductsByCategorySuspense',
        component: (): any =>
          import(
            /* webpackChunkName: "product-by-category" */ '@/views/public-layout/catalog/CatalogProducts.vue'
          ),
        props: true
      },
      {
        path: '/catalog/:categoryId/:id',
        name: 'CatalogProductSuspense',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-product" */ '@/views/public-layout/catalog/CatalogProductSuspense.vue'
          ),
        props: true
      }
    ]
  }
]

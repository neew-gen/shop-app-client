import { RouteRecordRaw } from 'vue-router'

export const catalogChildren: Array<RouteRecordRaw> = [
  {
    path: '/catalog',
    name: 'Catalog',
    component: (): any =>
      import(
        /* webpackChunkName: "catalog" */ '@/views/public-layout/catalog/index.vue'
      ),
    children: [
      {
        path: '',
        component: (): any =>
          import(
            /* webpackChunkName: "categories-menu" */ '@/views/public-layout/catalog/CategoriesMenu.vue'
          )
      },
      {
        path: '/catalog/:category',
        name: 'CatalogSection',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-section" */ '@/views/public-layout/catalog/CatalogSection.vue'
          ),
        props: true
      },
      {
        path: '/catalog/:category/:id',
        name: 'CatalogItem',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-item" */ '@/views/public-layout/catalog/CatalogItem.vue'
          ),
        props: true
      }
    ]
  }
]

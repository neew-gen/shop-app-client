import { RouteRecordRaw } from 'vue-router'

export const catalogRoutes: Array<RouteRecordRaw> = [
  {
    path: '/catalog',
    name: 'Catalog',
    component: (): any =>
      import(/* webpackChunkName: "catalog" */ '@/views/catalog/index.vue'),
    children: [
      {
        path: '',
        component: (): any =>
          import(
            /* webpackChunkName: "categories-menu" */ '@/views/catalog/CategoriesMenu.vue'
          )
      },
      {
        path: '/catalog/:category',
        name: 'CatalogSection',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-section" */ '@/views/catalog/CatalogSection.vue'
          ),
        props: true
      },
      {
        path: '/catalog/:category/:id',
        name: 'CatalogItem',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-item" */ '@/views/catalog/CatalogItem.vue'
          ),
        props: true
      }
    ]
  }
]

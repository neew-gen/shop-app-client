import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: (): any =>
      import(/* webpackChunkName: "catalog" */ '../views/catalog/index.vue'),
    children: [
      {
        path: '',
        component: (): any =>
          import(
            /* webpackChunkName: "categories-menu" */ '../views/catalog/CategoriesMenu.vue'
          )
      },
      {
        path: '/catalog/:category',
        name: 'CatalogSection',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-section" */ '../views/catalog/CatalogSection.vue'
          ),
        props: true
      },
      {
        path: '/catalog/:category/:id',
        name: 'CatalogItem',
        component: (): any =>
          import(
            /* webpackChunkName: "catalog-item" */ '../views/catalog/CatalogItem.vue'
          ),
        props: true
      }
    ]
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: (): any =>
      import(
        /* webpackChunkName: "shopping-cart" */ '../views/ShoppingCart.vue'
      )
  },
  {
    path: '/profile',
    name: 'Profile',
    component: (): any =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/admin-page',
    name: 'AdminPage',
    component: (): any =>
      import(/* webpackChunkName: "admin-page" */ '../views/AdminPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

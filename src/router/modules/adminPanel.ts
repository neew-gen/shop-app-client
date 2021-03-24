// import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
//
// export const adminPanelRoutes: Array<RouteRecordRaw> = [
//   {
//     path: '/admin-panel',
//     name: 'AdminPanel',
//     component: (): any =>
//       import(
//         /* webpackChunkName: "admin-panel" */ '@/views/admin-panel/index.vue'
//       ),
//     children: [
//       {
//         path: '',
//         name: 'AdminPanelHome',
//         component: (): any =>
//           import(
//             /* webpackChunkName: "admin-panel-home" */ '@/views/admin-panel/AdminPanelHome.vue'
//           )
//       },
//       {
//         path: '/admin-panel/create-product',
//         name: 'CreateProduct',
//         component: (): any =>
//           import(
//             /* webpackChunkName: "admin-panel-create" */ '@/views/admin-panel/CreateProduct.vue'
//           )
//       },
//       {
//         path: '/admin-panel/edit-products',
//         name: 'EditProductsList',
//         component: (): any =>
//           import(
//             /* webpackChunkName: "edit-products-list" */ '@/views/admin-panel/EditProductsList.vue'
//           )
//       },
//       {
//         path: '/admin-panel/edit-products/:id',
//         name: 'EditProduct',
//         component: (): any =>
//           import(
//             /* webpackChunkName: "edit-product-item" */ '@/views/admin-panel/EditProduct.vue'
//           ),
//         props: true
//       }
//     ]
//   }
// ]

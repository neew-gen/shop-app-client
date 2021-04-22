import { RouteRecordRaw } from 'vue-router'

export const swipeChildren: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-swipe',
    name: 'create-swipe',
    component: (): any =>
      import(
        /* webpackChunkName: "create-swipe" */ '@/views/admin-layout/swipe/create-swipe.vue'
      ),
  },
  {
    path: '/admin-panel/edit-swipes',
    name: 'edit-swipes',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-swipes" */ '@/views/admin-layout/swipe/edit-swipes.vue'
      ),
  },
  {
    path: '/admin-panel/edit-swipes/:id',
    name: 'edit-swipe',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-swipe" */ '@/views/admin-layout/swipe/edit-swipe.vue'
      ),
    props: true,
  },
]

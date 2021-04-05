import { RouteRecordRaw } from 'vue-router'

export const swipeChildren: Array<RouteRecordRaw> = [
  {
    path: '/admin-panel/create-swipe',
    name: 'CreateSwipe',
    component: (): any =>
      import(
        /* webpackChunkName: "create-swipe" */ '@/views/admin-layout/swipe/CreateSwipe.vue'
      )
  },
  {
    path: '/admin-panel/edit-swipes',
    name: 'EditSwipeListSuspense',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-swipes-list" */ '@/views/admin-layout/swipe/EditSwipeListSuspense.vue'
      )
  },
  {
    path: '/admin-panel/edit-swipes/:id',
    name: 'EditSwipeSuspense',
    component: (): any =>
      import(
        /* webpackChunkName: "edit-swipe" */ '@/views/admin-layout/swipe/EditSwipeSuspense.vue'
      ),
    props: true
  }
]

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
var routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/Catalog.vue')
    }
  }
]
var router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})
export default router
//# sourceMappingURL=index.js.map

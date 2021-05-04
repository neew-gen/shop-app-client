import { Ref } from 'vue'
import { Router } from 'vue-router'

export default function (router: Router, loading: Ref<boolean>): void {
  router.beforeEach((to, from, next) => {
    // TODO need to add the setting of the paths where we want to show the loader
    // loading.value = true
    next()
  })
  router.afterEach(() => {
    setTimeout(() => (loading.value = false), 200)
    // loading.value = false
  })
}

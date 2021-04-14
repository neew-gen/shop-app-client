import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp, ref } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import { store } from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
import Toaster from '@meforma/vue-toaster' // https://github.com/MeForma/vue-toaster
import { eventBus } from '@/helpers/EventBus'
import appLoader from '@/helpers/appLoader'
import 'skeleton-screen-css' // https://www.npmjs.com/package/skeleton-screen-css

// turn off when development is in progress
// import runtime from 'serviceworker-webpack-plugin/lib/runtime'
//
// if (process.env.NODE_ENV === 'development') {
//   if ('serviceWorker' in navigator) {
//     runtime.register()
//   }
// }

const app = createApp(App)
app.provide('eventBus', eventBus)

const loading = ref(true)
app
  // .use(store)
  .use(router)
  .use(Toaster, {
    position: 'top-right',
    duration: 1000,
    maxToasts: 2
  })
  .provide('toast', app.config.globalProperties.$toast)
  .provide('loading', loading)
  .mount('#app')

// the app loader is showing AppLoader.vue component before route component is loaded
appLoader(router, loading)

import 'mdb-vue-ui-kit/css/mdb.min.css'
import './registerServiceWorker'
import 'skeleton-screen-css' // https://www.npmjs.com/package/skeleton-screen-css
import 'vue-toastification/dist/index.css'

import { createApp, ref } from 'vue'
import Toast, { PluginOptions, POSITION } from 'vue-toastification' // https://github.com/Maronato/vue-toastification/tree/next

import appLoader from '@/helpers/appLoader'
import { store } from '@/store'

import App from './App.vue'
import router from './router'

// turn off when development is in progress
// import runtime from 'serviceworker-webpack-plugin/lib/runtime'
//
// if (process.env.NODE_ENV === 'development') {
//   if ('serviceWorker' in navigator) {
//     runtime.register()
//   }
// }
const toastOptions: PluginOptions = {
  maxToasts: 4,
  timeout: 2000,
  containerClassName: 'toast-container',
  closeButton: false,
}

const app = createApp(App)

const loading = ref(true)
app
  .use(store)
  .use(router)
  .use(Toast, toastOptions)
  .provide('loading', loading)
  .mount('#app')

// the app loader is showing AppLoader.vue component before route component is loaded
appLoader(router, loading)

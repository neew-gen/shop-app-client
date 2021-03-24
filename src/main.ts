import { createApp, provide } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Toaster from '@meforma/vue-toaster' // https://github.com/MeForma/vue-toaster

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(Toaster, {
    position: 'top-right',
    duration: 2000,
    maxToasts: 4
  })
  .provide('toast', app.config.globalProperties.$toast)
  .mount('#app')

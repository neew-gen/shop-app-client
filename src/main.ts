import { createApp, provide } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Toaster from '@meforma/vue-toaster' // https://github.com/MeForma/vue-toaster
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eventBus from '@/helpers/eventBus'

const app = createApp(App)
app.provide('eventBus', eventBus)

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

import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp, provide } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
import Toaster from '@meforma/vue-toaster' // https://github.com/MeForma/vue-toaster
import { eventBus } from '@/helpers/eventBus'

const app = createApp(App)
app.provide('eventBus', eventBus)

app
  .use(store)
  .use(router)
  .use(Toaster, {
    position: 'top-right',
    duration: 1000,
    maxToasts: 2
  })
  .provide('toast', app.config.globalProperties.$toast)
  .mount('#app')

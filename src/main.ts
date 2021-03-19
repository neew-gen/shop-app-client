import { createApp, provide } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import apolloPlugin from '@/plugins/apolloPlugin'

createApp(App)
  .use(store)
  .use(router)
  // .use(apolloPlugin)
  .mount('#app')

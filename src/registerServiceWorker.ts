/* eslint-disable no-console */
// TODO 1. need to add refresh content button when we have update for sw https://axelhodler.medium.com/caching-in-a-vue-js-pwa-845233696072

import { register } from 'register-service-worker'
//
// register(`${process.env.BASE_URL}service-worker.js`, {
//   ready() {
//     console.log(
//       'App is being served from cache by a service worker.\n' +
//         'For more details, visit https://goo.gl/AFskqB'
//     )
//   },
//   registered() {
//     console.log('Service worker has been registered.')
//   },
//   cached() {
//     console.log('Content has been cached for offline use.')
//   },
//   updatefound() {
//     console.log('New content is downloading.')
//   },
//   updated() {
//     console.log('New content is available; please refresh.')
//   },
//   offline() {
//     console.log('No internet connection found. App is running in offline mode.')
//   },
//   error(error) {
//     console.error('Error during service worker registration:', error)
//   }
// })

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered() {
      console.log('Service worker has been registered.')
    },
    cached() {
      console.log('Content has been cached for offline use.')
    },
    updatefound() {
      console.log('New content is downloading.')
    },
    updated() {
      console.log('New content is available; please refresh.')
    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.'
      )
    },
    error(error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

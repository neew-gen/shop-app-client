import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const config = {
  apiKey: 'AIzaSyCWxuBOKnZa_Rp-6P1591Iwe_dgmB34N-k',
  authDomain: 'shop-app-228.firebaseapp.com',
  databaseURL: 'https://shop-app-228-default-rtdb.firebaseio.com',
  projectId: 'shop-app-228',
  storageBucket: 'shop-app-228.appspot.com',
  messagingSenderId: '530646411728',
  appId: '1:530646411728:web:4022c35bf4bdf8a36af1d5',
  measurementId: 'G-JFB6Q6W8ET',
}

const firebaseApp = initializeApp(config)
const storage = getStorage(firebaseApp)
export { firebaseApp, storage }

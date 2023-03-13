import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAiztaLk3F7Pvcr6PIGONWr6CS-A9GpH94",
  authDomain: "somflix-4eede.firebaseapp.com",
  databaseURL: 'https://somflix-4eede.firebaseapp.com',
  projectId: "somflix-4eede",
  storageBucket: "somflix-4eede.appspot.com",
  messagingSenderId: "469115081718",
  appId: "1:469115081718:web:d713d37fd8b012cbe2edd7"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
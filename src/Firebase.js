import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDt4IY5ZXQ0lCMZDkH0ap97c12SW1kQWoo",
    authDomain: "staytune-ytclone.firebaseapp.com",
    projectId: "staytune-ytclone",
    storageBucket: "staytune-ytclone.appspot.com",
    messagingSenderId: "157631276229",
    appId: "1:157631276229:web:6368979a7ceefb3eb07cac"
  };

  const app=initializeApp(firebaseConfig)
  export const auth=getAuth(app)
  export default app;

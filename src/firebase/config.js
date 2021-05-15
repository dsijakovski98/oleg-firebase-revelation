import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFneS4yaR5ufO_uFtf6EZEQvcvn19ZWbc",
    authDomain: "auth-firestore-oleg.firebaseapp.com",
    projectId: "auth-firestore-oleg",
    storageBucket: "auth-firestore-oleg.appspot.com",
    messagingSenderId: "529010400386",
    appId: "1:529010400386:web:3734c76f5008456cd5289b"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
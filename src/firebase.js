import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD87BCA7Dq85KT1JAZzo1rhQzuO9_ETO4k",
    authDomain: "chetan-todolist.firebaseapp.com",
    databaseURL: "https://chetan-todolist.firebaseio.com",
    projectId: "chetan-todolist",
    storageBucket: "chetan-todolist.appspot.com",
    messagingSenderId: "89382615338",
    appId: "1:89382615338:web:6a53c22b52c64afbfc8653"
})

export { firebaseConfig as firebase }

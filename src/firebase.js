import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAK72aOHyc9NLgRGWaC0L0tA5PjU3b2Wnc",
  authDomain: "facebook-messenger-clone-29878.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-29878.firebaseio.com",
  projectId: "facebook-messenger-clone-29878",
  storageBucket: "facebook-messenger-clone-29878.appspot.com",
  messagingSenderId: "813956684370",
  appId: "1:813956684370:web:730576e71ba15a8eb35d8b",
  measurementId: "G-6VTW08TXGB",
});

const db = firebaseApp.firestore();

export default db;

import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAOSrkV_n4BbZEVN-d9KEXtx5mAsoMwLk8",
    authDomain: "mixtape-1f42e.firebaseapp.com",
    projectId: "mixtape-1f42e",
    storageBucket: "mixtape-1f42e.appspot.com",
    messagingSenderId: "79332163865",
    appId: "1:79332163865:web:3b2180562b67d0e35b0588",
    measurementId: "G-RMN73LKH4Y"
});


const db = firebase.firestore();


export default {
  firebase, db
}

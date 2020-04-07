import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXGYpFRldEbvp-UJDOB4liHe1hIIPgtWs",
    authDomain: "crwn-db-904f1.firebaseapp.com",
    databaseURL: "https://crwn-db-904f1.firebaseio.com",
    projectId: "crwn-db-904f1",
    storageBucket: "crwn-db-904f1.appspot.com",
    messagingSenderId: "598999686370",
    appId: "1:598999686370:web:81181078178b0d2e5d12bb",
    measurementId: "G-R4Q4LXK6CV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase';

const firebases = firebase.initializeApp({
    apiKey: "AIzaSyBGjUT08WuMaRV1WKviCtGVYJDKKU30pDo",
    authDomain: "clone-f1e0e.firebaseapp.com",
    databaseURL: "https://clone-f1e0e.firebaseio.com",
    projectId: "clone-f1e0e",
    storageBucket: "clone-f1e0e.appspot.com",
    messagingSenderId: "934253475095",
    appId: "1:934253475095:web:ad0d440a2e83525f647352",
    measurementId: "G-EVPB62XXCX"
});

// const db = firebaseApp.firestore();
const auth = firebases.auth();

export { auth }
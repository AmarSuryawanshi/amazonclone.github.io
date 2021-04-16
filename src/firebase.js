import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxcknBK-r9FU39KTXPH8sk6h5eN_Xoaxo",
  authDomain: "clone-97886.firebaseapp.com",
  projectId: "clone-97886",
  storageBucket: "clone-97886.appspot.com",
  messagingSenderId: "1066653374643",
  appId: "1:1066653374643:web:d7f706279142611cb4f8c6",
  measurementId: "G-0N56WVRLKG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

//import firebase from "firebase";
//import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB7tDCHY18hLppwav8ChdOoLKD75AC4QWI",
  authDomain: "usersa-8542a.firebaseapp.com",
  projectId: "usersa-8542a",
  storageBucket: "usersa-8542a.appspot.com",
  messagingSenderId: "885537337054",
  appId: "1:885537337054:web:aa019d4319ea6fb97adc4f",
  measurementId: "G-6CEFG8LXXG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};

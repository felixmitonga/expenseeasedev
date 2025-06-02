import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0VsvZpXlHJmIzp4tZxNqON04ZDUZ5Sbs",
  authDomain: "cp600-dev.firebaseapp.com",
  projectId: "cp600-dev",
  storageBucket: "cp600-dev.firebasestorage.app",
  messagingSenderId: "416836766929",
  appId: "1:416836766929:web:30bc5c903bb78825dbc9f0",
  measurementId: "G-XYCL37M5S4"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();









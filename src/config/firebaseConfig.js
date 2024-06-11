// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ0RMXS1vUoRd7P4U5rwt4XfYUg2enddY",
  authDomain: "plantbudapp.firebaseapp.com",
  projectId: "plantbudapp",
  storageBucket: "plantbudapp.appspot.com",
  messagingSenderId: "806596678411",
  appId: "1:806596678411:web:576113580c95a0338b080e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
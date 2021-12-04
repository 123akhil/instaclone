// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLFI4raQChdbch-KIhFtJMY5fAfr-sDuA",
  authDomain: "instaupdate-8e837.firebaseapp.com",
  projectId: "instaupdate-8e837",
  storageBucket: "instaupdate-8e837.appspot.com",
  messagingSenderId: "53521818707",
  appId: "1:53521818707:web:2bb49ed1d2cc88012f52a6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
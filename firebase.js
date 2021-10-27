// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbxsd6OtuAEKP5Dhi9poQ0axB-Aimbj5A",
  authDomain: "instaclone-e3c0b.firebaseapp.com",
  projectId: "instaclone-e3c0b",
  storageBucket: "instaclone-e3c0b.appspot.com",
  messagingSenderId: "153766743809",
  appId: "1:153766743809:web:efc04d999b82476d435500"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
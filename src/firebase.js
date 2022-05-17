// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6jDItyfFkdcYkJj4L-h6fI8dIZKcZ_9k",
  authDomain: "citas-crud.firebaseapp.com",
  projectId: "citas-crud",
  storageBucket: "citas-crud.appspot.com",
  messagingSenderId: "131082297449",
  appId: "1:131082297449:web:e6e8f0dcf4599b089642f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
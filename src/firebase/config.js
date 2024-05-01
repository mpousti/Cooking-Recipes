// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCICg8B62jLFgui3Zm-Gh5ZousYEoopEc0",
  authDomain: "cookingrecipe-ded45.firebaseapp.com",
  projectId: "cookingrecipe-ded45",
  storageBucket: "cookingrecipe-ded45.appspot.com",
  messagingSenderId: "697936993286",
  appId: "1:697936993286:web:3a1e240d2233d8628ff787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init firestore

const db = getFirestore(app);


export { db }
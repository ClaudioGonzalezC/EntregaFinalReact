// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtXwV1KbBeSwPjZZbxxHnPlkv5SRVR1kg",
  authDomain: "entregafinalreact-12900.firebaseapp.com",
  projectId: "entregafinalreact-12900",
  storageBucket: "entregafinalreact-12900.appspot.com",
  messagingSenderId: "475904704254",
  appId: "1:475904704254:web:95047f22b689c24f4b6faf",
  measurementId: "G-BX0GT1928F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
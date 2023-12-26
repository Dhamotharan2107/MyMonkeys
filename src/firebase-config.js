// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import{getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZf5SbT21RyhQe_82gtvxC3FYP4ZEmeSo",
  authDomain: "my-monkeys-2a8b1.firebaseapp.com",
  projectId: "my-monkeys-2a8b1",
  storageBucket: "my-monkeys-2a8b1.appspot.com",
  messagingSenderId: "305733423435",
  appId: "1:305733423435:web:3b8293cf052f4825b058ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
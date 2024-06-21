// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3786c.firebaseapp.com",
  projectId: "mern-blog-3786c",
  storageBucket: "mern-blog-3786c.appspot.com",
  messagingSenderId: "8066756624",
  appId: "1:8066756624:web:fea46b1eb274c45b871a95",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

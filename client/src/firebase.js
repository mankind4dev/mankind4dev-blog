// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:    import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "company-projects-5d06b.firebaseapp.com",
  projectId: "company-projects-5d06b",
  storageBucket: "company-projects-5d06b.appspot.com",
  messagingSenderId: "1028775912893",
  appId: "1:1028775912893:web:ff6802a2ac77c4a0651ed4"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
  
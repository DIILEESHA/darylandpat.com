// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your Firebase configuration (Replace with your own config)
const firebaseConfig = {
   apiKey: "AIzaSyCRud7burgawn_3gVpuQf8iFt5BRo_m8Ew",
  authDomain: "decx-f4f15.firebaseapp.com",
  projectId: "decx-f4f15",
  storageBucket: "decx-f4f15.firebasestorage.app",
  messagingSenderId: "853828714262",
  appId: "1:853828714262:web:d12cb15df25c825cf15a37"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore
export { db, collection, addDoc, getDocs };

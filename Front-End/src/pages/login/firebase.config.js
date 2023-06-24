// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNem2PTy32lPvPhPI3i77oHn74yv2oBvw",
  authDomain: "token-app-b2c6b.firebaseapp.com",
  projectId: "token-app-b2c6b",
  storageBucket: "token-app-b2c6b.appspot.com",
  messagingSenderId: "576384722290",
  appId: "1:576384722290:web:e59b5b71c8c713eddce9eb",
  measurementId: "G-3XQZ9VN09F",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
//hi
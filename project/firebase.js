import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtjqptEsU17xfhRo1tmHGUdad3uCOTSyA",
  authDomain: "astertech-project-5605a.firebaseapp.com",
  projectId: "astertech-project-5605a",
  storageBucket: "astertech-project-5605a.firebasestorage.app",
  messagingSenderId: "875326000952",
  appId: "1:875326000952:web:ab4245e98b48e74650bbcd",
  measurementId: "G-WNNG7KYY00"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
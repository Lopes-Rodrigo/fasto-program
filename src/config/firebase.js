import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTgbWZommPew0aSjINxCI0znY9sLgSpkc",
  authDomain: "fausto-program.firebaseapp.com",
  projectId: "fausto-program",
  storageBucket: "fausto-program.appspot.com",
  messagingSenderId: "277635597614",
  appId: "1:277635597614:web:61102b265a8ff35891e6bf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

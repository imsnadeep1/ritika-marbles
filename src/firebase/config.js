import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjdwjaK6xyUChnb92dAm8NfYd7-GL9j6E",
  authDomain: "ritika-marbles.firebaseapp.com",
  projectId: "ritika-marbles",
  storageBucket: "ritika-marbles.firebasestorage.app",
  messagingSenderId: "9900635326",
  appId: "1:9900635326:web:4ac52745ae5a3d3d2b5aef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

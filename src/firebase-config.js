// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc-kUuhOkB33Jh_vuyzQzG4nz3mVahvtg",
  authDomain: "chatapp-b2df3.firebaseapp.com",
  projectId: "chatapp-b2df3",
  storageBucket: "chatapp-b2df3.appspot.com",
  messagingSenderId: "426088896218",
  appId: "1:426088896218:web:9ad7b27261d171f69377e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const doSignOut =() => auth.signOut();
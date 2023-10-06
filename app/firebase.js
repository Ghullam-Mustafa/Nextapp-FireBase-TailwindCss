// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnNALsXUlGsoOgWHEXleM6d1PbTGB46Y8",
  authDomain: "esxpense-tracker.firebaseapp.com",
  projectId: "esxpense-tracker",
  storageBucket: "esxpense-tracker.appspot.com",
  messagingSenderId: "17404366665",
  appId: "1:17404366665:web:f4570b4dfe2820faa21498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
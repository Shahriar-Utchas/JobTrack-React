// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4dyO17qtcz6v4p30_q0CV8tutS8uwZCQ",
  authDomain: "jobtrack-f28f7.firebaseapp.com",
  projectId: "jobtrack-f28f7",
  storageBucket: "jobtrack-f28f7.firebasestorage.app",
  messagingSenderId: "233644149420",
  appId: "1:233644149420:web:3c9d230b438e0dbf20ed09",
  measurementId: "G-F85Z6Y5JJ3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
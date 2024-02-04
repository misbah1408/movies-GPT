// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6vpDyl4BzX0x-iF6TK-RskwgLlr0mg64",
  authDomain: "moviesgpt-app.firebaseapp.com",
  projectId: "moviesgpt-app",
  storageBucket: "moviesgpt-app.appspot.com",
  messagingSenderId: "459258056228",
  appId: "1:459258056228:web:f7cc98f3899115583592b1",
  measurementId: "G-LWCFC0EFPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

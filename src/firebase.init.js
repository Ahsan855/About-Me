// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIOs43g4boHOtDrIXhgcUrOErcLLlrWfo",
  authDomain: "devloper-build.firebaseapp.com",
  projectId: "devloper-build",
  storageBucket: "devloper-build.appspot.com",
  messagingSenderId: "19616103568",
  appId: "1:19616103568:web:3a6eb1d9a07821f6d6ec15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

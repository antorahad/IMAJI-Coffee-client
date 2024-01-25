// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbPCK-56iU6erJnwDVi2DHlbnrs2PGgCI",
  authDomain: "imaji-coffee.firebaseapp.com",
  projectId: "imaji-coffee",
  storageBucket: "imaji-coffee.appspot.com",
  messagingSenderId: "164040928472",
  appId: "1:164040928472:web:f3f46d007f304c97803bad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
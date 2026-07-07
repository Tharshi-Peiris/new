// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCabOf-rYYZ2eV6Bu1BApKyqYyd8nHSYYQ",
  authDomain: "sylvaracom.firebaseapp.com",
  projectId: "sylvaracom",
  storageBucket: "sylvaracom.firebasestorage.app",
  messagingSenderId: "818423713268",
  appId: "1:818423713268:web:fd097497cd745704413da1",
  measurementId: "G-E4P55R64GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

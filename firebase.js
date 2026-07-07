// Firebase SDK මොඩියුල ගෙන්වා ගැනීම
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// පියවර 4 හි ලැබුණු ඔබේ Firebase Config එක මෙතනට දමන්න
const firebaseConfig = {
  apiKey: "AIzaSyCabOf-rYYZ2eV6Bu1BApKyqYyd8nHSYYQ",
  authDomain: "sylvaracom.firebaseapp.com",
  projectId: "sylvaracom",
  storageBucket: "sylvaracom.firebasestorage.app",
  messagingSenderId: "818423713268",
  appId: "1:818423713268:web:fd097497cd745704413da1",
  measurementId: "G-E4P55R64GL"
};


// Firebase Initialize කිරීම
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 1. SIGN UP (ලියාපදිංචි වීම) සඳහා ශ්‍රිතය
export function handleSignUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Sign Up සාර්ථකයි!");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert("දෝෂයක් ඇතිවිය: " + error.message);
    });
}

// 2. LOGIN (ඇතුළු වීම) සඳහා ශ්‍රිතය
export function handleLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login සාර්ථකයි!");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert("Email හෝ Password වැරදියි: " + error.message);
    });
}

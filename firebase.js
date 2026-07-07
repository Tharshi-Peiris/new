// Firebase SDK මොඩියුල ගෙන්වා ගැනීම
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// ඔබේ Firebase Config එක
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
const db = getFirestore(app);

// 1. SIGN UP (ලියාපදිංචි වීම) — returns a Promise so the calling page
//    can handle success/error UI itself.
export function handleSignUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// 1b. SAVE PROFILE — writes the extra signup fields (name, phone, etc.)
//     into Firestore under /users/{uid}. Call this right after
//     handleSignUp succeeds, passing the new user's uid.
export function saveUserProfile(uid, data) {
  return setDoc(doc(db, "users", uid), {
    ...data,
    createdAt: serverTimestamp()
  });
}

// 2. LOGIN (ඇතුළු වීම) — only succeeds for accounts that already exist.
//    Firebase automatically rejects unknown emails / wrong passwords.
export function handleLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 3. LOGOUT
export function handleLogout() {
  return signOut(auth);
}

// 4. Watch auth state (useful if you want to redirect logged-in users
//    away from login/signup automatically, or show account info)
export function watchAuthState(callback) {
  onAuthStateChanged(auth, callback);
}

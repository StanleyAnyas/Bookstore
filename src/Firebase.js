// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ5QLAAqFuOTxWvQ-QGkskbpLp2yNakJ4",
  authDomain: "bookstore-3658b.firebaseapp.com",
  databaseURL: "https://bookstore-3658b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookstore-3658b",
  storageBucket: "bookstore-3658b.appspot.com",
  messagingSenderId: "646050165084",
  appId: "1:646050165084:web:d2719e97541ddd77589199",
  measurementId: "G-K1RNT5RRZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
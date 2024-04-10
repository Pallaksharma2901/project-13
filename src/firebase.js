// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAwrsRdzQdqUr2gygw2f2U8bYxHFxBBXc",
  authDomain: "crude-2c659.firebaseapp.com",
  databaseURL: "https://crude-2c659-default-rtdb.firebaseio.com",
  projectId: "crude-2c659",
  storageBucket: "crude-2c659.appspot.com",
  messagingSenderId: "66423055169",
  appId: "1:66423055169:web:99927a1b7340196c0e37c0",
  measurementId: "G-834G5H7ZE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
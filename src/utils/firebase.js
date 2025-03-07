// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7x4FK8Ehb1fWz2oHBGOIsFn-1ujuFTuw",
  authDomain: "netflixgpt-ed870.firebaseapp.com",
  projectId: "netflixgpt-ed870",
  storageBucket: "netflixgpt-ed870.firebasestorage.app",
  messagingSenderId: "290284684198",
  appId: "1:290284684198:web:5ab799331eb0f9d4714567",
  measurementId: "G-86CHN5HKXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };

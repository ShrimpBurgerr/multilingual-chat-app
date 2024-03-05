import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getFunctions  } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqcWxyxBcfi8G_rA_28PHpjdd8Q2QbmMA",
    authDomain: "multilingual-chat-applic-960db.firebaseapp.com",
    projectId: "multilingual-chat-applic-960db",
    storageBucket: "multilingual-chat-applic-960db.appspot.com",
    messagingSenderId: "20791313486",
    appId: "1:20791313486:web:7de7e1269ed0667b376f1f"
  };
  
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const functions = getFunctions(app);

  export {db, auth, functions };
  
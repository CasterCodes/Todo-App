import firebase from "firebase";

import "firebase/firestore";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  projectId: "YOUR PROJECT-ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "",
  appId: "YOUR APP ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

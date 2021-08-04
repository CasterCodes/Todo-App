import firebase from "firebase";

import "firebase/firestore";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0-SmFBA27ba4_hklegTM9kqxOb-yJwHw",
  authDomain: "todo-dacd5.firebaseapp.com",
  projectId: "todo-dacd5",
  storageBucket: "todo-dacd5.appspot.com",
  messagingSenderId: "1059395913580",
  appId: "1:1059395913580:web:c0959fa2998a949ccdd549",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

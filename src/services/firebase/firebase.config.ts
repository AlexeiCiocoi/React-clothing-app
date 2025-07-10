import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



 const  firebaseConfig = {
  apiKey: "AIzaSyC5a8z_3RfTh-yxadcDtvQ6QE1ZYTUsWz4",
  authDomain: "crown-db-9fac1.firebaseapp.com",
  projectId: "crown-db-9fac1",
  storageBucket: "crown-db-9fac1.firebasestorage.app",
  messagingSenderId: "318751584994",
  appId: "1:318751584994:web:5468f94f78fc6fbf1324bb"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();
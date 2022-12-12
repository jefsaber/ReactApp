// import {getFireStore,SetDoc,doc} from 'firebase/firestore'

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const FirebaseConfig = {
  apiKey: "AIzaSyCtEJhij4TqESZOVY0oV0lZSfOZPttbB1U",
  authDomain: "mobileapp-4e0c2.firebaseapp.com",
  projectId: "mobileapp-4e0c2",
  storageBucket: "mobileapp-4e0c2.appspot.com",
  messagingSenderId: "831855718211",
  appId: "1:831855718211:web:f67a7048d0909aa35749f6",
  measurementId: "G-2YQRFEK2VB",
};

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, db, storage };

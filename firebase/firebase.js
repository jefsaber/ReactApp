import { initializeApp } from 'firebase/app';
import {getFireStore,SetDoc,doc} from 'firebase/firestore'
const FirebaseConfig= {
    apiKey: "AIzaSyCtEJhij4TqESZOVY0oV0lZSfOZPttbB1U",
    authDomain: "mobileapp-4e0c2.firebaseapp.com",
    projectId: "mobileapp-4e0c2",
    storageBucket: "mobileapp-4e0c2.appspot.com",
    messagingSenderId: "831855718211",
    appId: "1:831855718211:web:f67a7048d0909aa35749f6",
    measurementId: "G-2YQRFEK2VB"
}
initializeApp(FirebaseConfig);
const SendData = async()=>{
    const firestore=getFireStore();
    await SetDoc (doc(firestore,'users','user_id'), {
        phone:'1233',
        color:'red'
    })
}
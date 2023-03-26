
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBco7ct_L7DVRr-TZDkWGffcPXD5mMxlrU",
    authDomain: "final-react-coderhouse.firebaseapp.com",
    projectId: "final-react-coderhouse",
    storageBucket: "final-react-coderhouse.appspot.com",
    messagingSenderId: "824295734196",
    appId: "1:824295734196:web:a53b69fb7d5936865790e1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
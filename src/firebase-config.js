import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqUvTdCZmtqHdlle3ljAqxwM5rUKWqpGs",
    authDomain: "gameweeks-ad6a1.firebaseapp.com",
    projectId: "gameweeks-ad6a1",
    storageBucket: "gameweeks-ad6a1.appspot.com",
    messagingSenderId: "577917640472",
    appId: "1:577917640472:web:b87495f94d52c0b857086d",
    measurementId: "G-WFDDVDH5N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
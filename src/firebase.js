
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCR6xn-a6rmhbCIbQgJ-9IIOJftASDfIJM",
    authDomain: "chatapp-ef638.firebaseapp.com",
    projectId: "chatapp-ef638",
    storageBucket: "chatapp-ef638.appspot.com",
    messagingSenderId: "127347775025",
    appId: "1:127347775025:web:c524894f0127ceb67be710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db =getFirestore(app)
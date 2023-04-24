// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlir1E6AhctKnI3OGam2YpINlWD_2PRkQ",
  authDomain: "frames-6ff4a.firebaseapp.com",
  projectId: "frames-6ff4a",
  storageBucket: "frames-6ff4a.appspot.com",
  messagingSenderId: "510399821555",
  appId: "1:510399821555:web:4a744d31d64ec79436a986"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };


// init firestore
export const db = getFirestore(app);
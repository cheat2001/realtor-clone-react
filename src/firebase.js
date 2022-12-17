// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi3RAgKE2LyuLKUVf7CHh55UFuK28ixS0",
  authDomain: "realtor-cambodia.firebaseapp.com",
  projectId: "realtor-cambodia",
  storageBucket: "realtor-cambodia.appspot.com",
  messagingSenderId: "894501179023",
  appId: "1:894501179023:web:96c4f3ab33b95fd7406afa",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

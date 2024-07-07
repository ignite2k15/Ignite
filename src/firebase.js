// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1MU7TBD7xX1KTB5xOJeb6hD_SV13-9b0",
  authDomain: "ignite-1693f.firebaseapp.com",
  projectId: "ignite-1693f",
  storageBucket: "ignite-1693f.appspot.com",
  messagingSenderId: "1075655361348",
  appId: "1:1075655361348:web:3a3d352774ae4db675cd11",
  measurementId: "G-FWYKXQNSK5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Configuration Firebase - À REMPLACER avec tes identifiants
const firebaseConfig = {
  apiKey: "AIzaSyBpch5acNTEc2tJMsoPGdzXMKvtn_HU1Xo",
  authDomain: "roue-de-la-mort.firebaseapp.com",
  databaseURL: "https://roue-de-la-mort-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "roue-de-la-mort",
  storageBucket: "roue-de-la-mort.firebasestorage.app",
  messagingSenderId: "376681067736",
  appId: "1:376681067736:web:8edaf7c0a580617de613ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

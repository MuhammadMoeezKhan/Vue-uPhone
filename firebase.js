import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAy_Irh7rKhpZi07IhsAsH9k2vTFIZrVhs",
  authDomain: "uphone-ab7cd.firebaseapp.com",
  projectId: "uphone-ab7cd",
  storageBucket: "uphone-ab7cd.appspot.com",
  messagingSenderId: "824681626140",
  appId: "1:824681626140:web:4e567158dbfcf3a873fdd9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
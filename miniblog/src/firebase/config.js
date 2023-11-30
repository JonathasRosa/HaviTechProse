import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqlJV5pB8mtlY_Is-vUYqoA_vRP5_88Ho",
  authDomain: "techblog-905f8.firebaseapp.com",
  projectId: "techblog-905f8",
  storageBucket: "techblog-905f8.appspot.com",
  messagingSenderId: "709843309639",
  appId: "1:709843309639:web:b160886d93d5ab25818d62"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
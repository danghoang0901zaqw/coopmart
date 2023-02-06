import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSqZMWvbKMlYQTbpxNOw1IHg8DzGbHdEs",
  authDomain: "shop-clone-13d93.firebaseapp.com",
  projectId: "shop-clone-13d93",
  storageBucket: "shop-clone-13d93.appspot.com",
  messagingSenderId: "590692486492",
  appId: "1:590692486492:web:bd1dfc67037c2c72d7c599",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;



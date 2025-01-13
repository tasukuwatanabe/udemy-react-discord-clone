import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOZ0QKyF1wdKd5SQUxzXBOd-pQJyn4YyM",
  authDomain: "udemy-react-discord-clone.firebaseapp.com",
  projectId: "udemy-react-discord-clone",
  storageBucket: "udemy-react-discord-clone.firebasestorage.app",
  messagingSenderId: "45359222448",
  appId: "1:45359222448:web:b21ea086b3b088ecf7f575",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

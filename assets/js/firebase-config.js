// assets/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3ROdYXdPCEM9i1pbMw6r4QdIb4kvlMHA",
  authDomain: "portfoliom-60252.firebaseapp.com",
  projectId: "portfoliom-60252",
  storageBucket: "portfoliom-60252.firebasestorage.app",
  messagingSenderId: "253613918103",
  appId: "1:253613918103:web:99e60715c4b5a4296d66d2",
  measurementId: "G-H7N8R6QSQ9"
};

// Firebase'i Başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Diğer sayfalarda kullanabilmek için dışa aktar
export { db, auth };
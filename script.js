import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  runTransaction,
  onValue
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCG9Xxlxe5OVEtK4OKn7ax-gYXdU6lrRqo",
  authDomain: "eclipze-5767e.firebaseapp.com",
  databaseURL: "https://eclipze-5767e-default-rtdb.firebaseio.com",
  projectId: "eclipze-5767e",
  storageBucket: "eclipze-5767e.firebasestorage.app",
  messagingSenderId: "280079838116",
  appId: "1:280079838116:web:a5d3ff1e2c3e6765a4ef31"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const visitorsRef = ref(db, "visitors");


runTransaction(visitorsRef, (current) => {
  return (current || 0) + 1;
});


onValue(visitorsRef, (snapshot) => {
  const count = snapshot.val();
  const el = document.getElementById("visitor-count");
  if (el) el.textContent = count;
});


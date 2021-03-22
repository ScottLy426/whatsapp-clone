import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9ZylmWDRx3cXLTKMU3cuMCZzEL7Pct5k",
  authDomain: "whats-app-clone-12989.firebaseapp.com",
  projectId: "whats-app-clone-12989",
  storageBucket: "whats-app-clone-12989.appspot.com",
  messagingSenderId: "580925470278",
  appId: "1:580925470278:web:7b7696f8d581a1ced1bc47",
  measurementId: "G-EMF7KJH00Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

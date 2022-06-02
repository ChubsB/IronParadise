import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseSettings = {
  apiKey: "AIzaSyAaHA3jo2N-V7_dKKHFv-Q9DYvPXcHPSNw",
  authDomain: "ironparadise-d240c.firebaseapp.com",
  databaseURL: "ironparadise-d240c.asia-south1.firebasedatabase.app",
  projectId: "ironparadise-d240c",
  storageBucket: "ironparadise-d240c.appspot.com",
  messagingSenderId: "911244171824",
  appId: "1:911244171824:web:d5cfcf662734ee23deebf5",
  measurementId: "G-E2KRRV54XE",
};

let app = !firebase.apps.length
  ? firebase.initializeApp(firebaseSettings)
  : firebase.app();

const firestore = app.firestore();

export const database = {
  exercises: firestore.collection("exercises"),
  workouts: firestore.collection("workouts"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default app;

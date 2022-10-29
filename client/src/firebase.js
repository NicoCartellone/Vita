import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
  apiKey: "AIzaSyCfR2dtgAujJrTo9dQudYEgdJR1LibYuU4",
  authDomain: "prueba-medicos.firebaseapp.com",
  projectId: "prueba-medicos",
  storageBucket: "prueba-medicos.appspot.com",
  messagingSenderId: "1020855849561",
  appId: "1:1020855849561:web:dfa78fad46c79a6b595748"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;

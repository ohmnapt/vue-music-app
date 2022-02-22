import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCu11D7mSEypMZ45Vbu48bb9pHVZKeB86c",
  authDomain: "music-ef078.firebaseapp.com",
  projectId: "music-ef078",
  storageBucket: "music-ef078.appspot.com",
  messagingSenderId: "1012982218495",
  appId: "1:1012982218495:web:68cf6c437841d605a596ca",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection("users");

export { auth, db, userCollection, storage };

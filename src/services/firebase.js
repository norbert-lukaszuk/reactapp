import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: "codecheatsheet-7d13a.firebaseapp.com",
  databaseURL: "https://codecheatsheet-7d13a.firebaseio.com",
  projectId: "codecheatsheet-7d13a",
  storageBucket: "codecheatsheet-7d13a.appspot.com",
  messagingSenderId: "147725314310",
  appId: "1:147725314310:web:fe8f5a82f5a9c04c685687",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
export default auth;

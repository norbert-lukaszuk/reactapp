import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "codecheatsheet-7d13a.firebaseapp.com",
  databaseURL: "https://codecheatsheet-7d13a.firebaseio.com",
  projectId: "codecheatsheet-7d13a",
  storageBucket: "codecheatsheet-7d13a.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
export default auth;

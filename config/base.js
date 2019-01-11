import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAy3ZaQArI6ibMHxEPsr34y0QKgeWuz72w",
  authDomain: "buttered-db573.firebaseapp.com",
  databaseURL: "https://buttered-db573.firebaseio.com",
  projectId: "buttered-db573",
  storageBucket: "buttered-db573.appspot.com",
  messagingSenderId: "631908604056"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

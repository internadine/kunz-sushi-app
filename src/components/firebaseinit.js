import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      alert("Bitte schliesse die anderen Browser Tabs um fortzufahren.");
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      alert("Ihr aktueller Browser unterstützt keine Datenpersistenz");
    }
  });

const db = firebaseApp.firestore();

export default db;

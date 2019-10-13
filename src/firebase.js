import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAeXYiwxULfajXR4xELljAnPJZ39-HOI4c",
  authDomain: "react-slack-f42ee.firebaseapp.com",
  databaseURL: "https://react-slack-f42ee.firebaseio.com",
  projectId: "react-slack-f42ee",
  storageBucket: "react-slack-f42ee.appspot.com",
  messagingSenderId: "747513573849",
  appId: "1:747513573849:web:023a511da85ce805fa69c8",
  measurementId: "G-KHD6Q08K5G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;

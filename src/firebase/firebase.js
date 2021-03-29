/*

** Setup firebase:
** https://firebase.google.com/docs/web/setup?authuser=0

** How to read and write to database:
** https://firebase.google.com/docs/database/web/read-and-write

*/

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBipTwe7zpsFgCEcCVqhMQ6_MuL5dh67mc",
  authDomain: "expensify-61b3b.firebaseapp.com",
  databaseURL: 'https://expensify-61b3b-default-rtdb.firebaseio.com/',
  projectId: "expensify-61b3b",
  storageBucket: "expensify-61b3b.appspot.com",
  messagingSenderId: "180361186556",
  appId: "1:180361186556:web:e59824dbd489df3242db79",
  measurementId: "G-PMJDX6QNWG"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Create Google auth instance
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
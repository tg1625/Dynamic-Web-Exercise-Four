// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3UF9Vikt82pXuA69uIyg8OPgOG_zWy5o",
    authDomain: "exercise-four-2cb10.firebaseapp.com",
    databaseURL: "https://exercise-four-2cb10.firebaseio.com",
    projectId: "exercise-four-2cb10",
    storageBucket: "exercise-four-2cb10.appspot.com",
    messagingSenderId: "781972520111",
    appId: "1:781972520111:web:48b24e826479c7b3dc685a",
    measurementId: "G-822QJ1S6W7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//import express
const express = require('express')
//initiate express to app
const app = express()

//set port, use environmental variables, or use 4000 if it doesn't exist 
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Exercise Four'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
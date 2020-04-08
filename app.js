/*----- FIREBASE ------ */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase");
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
  //referene the database
  const db = firebase.firestore();

 /*Get Single Post*/
  const blogposts = db.collection("blogposts"); //reference to collections
  const docRef = blogposts.doc("sample-post"); //same as db.collection("blogposts").doc("sample")
  //get single item
  docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

/*Get All Posts*/
  const blogpostarray = []; //multiple posts
  const allblogposts = db.collection("blogposts").get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        blogpostarray.push(doc.data());
    });
  })
  .catch(function(error){
    console.log("Error:",error);
  });



/* ---- EXPRESS --- */
//import express
const express = require('express')
//initiate express to app
const app = express()
//set port, use environmental variables, or use 4000 if it doesn't exist 
const port = process.env.PORT || 4000;

//Import routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createArticle.js");

app.use('/post', postRoute);
app.use('create',createRoute);
app.get('/', (req, res) => res.send(blogpostarray))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
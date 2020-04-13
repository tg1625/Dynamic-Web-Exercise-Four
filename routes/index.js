/*-------Express------*/
const express = require('express');
const router = express.Router();

/*----Firebase------*/
var firebase = require("firebase"); //don't need to initialize or config, already done
//referene the database
const db = firebase.firestore();

/*Get All Posts*/

//sending data as it happens?
router.get('/', (req, res) => {
    var blogpostarray = []; //multiple posts, in the get to reset on reload
    const allblogposts = db.collection("blogposts").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            blogpostarray.push(doc.data());
        });
        return res.send(blogpostarray); //doing the returns in this get to handle errors
    })
    .catch(function(error){
        console.log("Error:",error);
        return res.send(error); //handling errors here 
    });    
});

//how to export in Express
module.exports = router;
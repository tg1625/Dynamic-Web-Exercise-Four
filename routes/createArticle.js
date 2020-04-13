const express = require('express');
const router = express.Router();

//Include Firebase
const firebase = require("firebase");
//reference the database
const db = firebase.firestore();
//reference to collections
const blogposts = db.collection("blogposts");

const form = `<h2>Enter Data</h2>
    <form action="/create/submit">
        <input type="text" name="title" placeholder="Title"/>
        <input type="text" name="text" placeholder="Text"/>
        <input type="text" name="author" placeholder="Author"/>
        <button type="submit">Submit</button>
    </form>
`;


// /create
router.get('/', (req, res) => res.send(form));
// /create/submit
router.get('/submit', (req, res) => {
    const queryParams = req.query;
    console.log(queryParams);
    blogposts
    .doc()
    .set(queryParams)
    .then(function(doc) {
        res.send("Submission success <a href='/create'>Create another post</a>");
    })
    .catch(function(error){
        console.log("Error:", error);
        res.send(`Error: ${error.toString()}`);
    });
});

//how to export in Express
module.exports = router;
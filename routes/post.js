const express = require('express');
const router = express.Router();

//get request for 
router.get('/', (req, res) => res.send("Here's some posts"));
//request for about/me
router.get('/me', (req, res) => res.send('A special post')); //routes are relative to route set in app.js

//how to export in Express
module.exports = router;
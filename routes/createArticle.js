const express = require('express');
const router = express.Router();

//get request for 
router.get('/', (req, res) => res.send('Lets make an article<br/> '));

//how to export in Express
module.exports = router;
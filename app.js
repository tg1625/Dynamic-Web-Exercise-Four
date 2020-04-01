//import express
const express = require('express')
//initiate express to app
const app = express()
//set port
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
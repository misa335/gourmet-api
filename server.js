// require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const path = require('path');
// const knex = require('./db/knex');


//server
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/build'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server has connected on port ${port}🧚✨`);
});


//endpoints
//get

//post

//put

//delete


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/build/index.html'));
// });

module.exports = app;
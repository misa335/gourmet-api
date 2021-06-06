require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const knex = require('./db/knex');


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
//visited table
//get
app.get('/logs', async (req, res) => {
    await knex.select().from('visited')
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});

//post
app.post('/logs', async (req, res) => {
    await knex('visited').insert({
        image: req.body.image,
        name: req.body.name,
        menu: req.body.menu,
        genre: req.body.genre,
        rate: req.body.rate,
        comment: req.body.rate,
        lat: req.body.lat,
        lng: req.body.lng
    })
    .then(() => knex.select().from('visited'))
    .then((datas) => res.send(datas))
    .catch(err => console.log('error:', err));
});

//put

//delete

//wishlist table
//get

//post

//put

//delete

//favorite table
//get

//post

//put

//delete


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

module.exports = app;
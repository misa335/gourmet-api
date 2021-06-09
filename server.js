require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const knex = require('./db/knex');
const axios = require('axios');


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

// const corsOptions = {
//     origin: 'http://webservice.recruit.co.jp/hotpepper',
//     optionSuccessStatus: 200
// };

//get restaurant list
app.get('/api', async (req, res) => {
    await axios.get("https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=ae1f69b84f3d5295&lat=35.66&lng=139.72&range=3&order=4&count=50&lunch=1&genre=G014&format=json")
    .then(res => console.log(res.data.results.shop))
    .catch(err => console.log('error:', err));
    res.send('Hello');
});

//endpoints
//visited table
//get all list
app.get('/logs', async (req, res) => {
    await knex.select().from('visited')
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});

//get single list

//post
app.post('/logs', async (req, res) => {
    await knex('visited').insert({
        image: req.body.image,
        name: req.body.name,
        menu: req.body.menu,
        genre: req.body.genre,
        rate: req.body.rate,
        comment: req.body.comment,
        lat: req.body.lat,
        lng: req.body.lng
    })
    .then(() => knex.select().from('visited'))
    .then((datas) => res.send(datas))
    .catch(err => console.log('error:', err));
});

//put
app.put('/logs/:id', async (req, res) => {
    await knex('visited').where('id', req.params.id)
        .update({
            image: req.body.image,
            name: req.body.name,
            menu: req.body.menu,
            genre: req.body.genre,
            rate: req.body.rate,
            comment: req.body.comment,
            lat: req.body.lat,
            lng: req.body.lng
        })
        .then(() => knex.select().from('visited'))
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});

//delete
app.delete('/logs/:id', async (req, res) => {
    await knex('visited').where('id', req.params.id)
        .del()
        .then(() => knex.select().from('visited'))
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});


//wishlist table
//get all wishlist
app.get('/wish', async (req, res) => {
    await knex.select().from('wishlist')
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});

//get single wishlist

//post
app.post('/wish', async (req, res) => {
    await knex('wishlist').insert({
        image: req.body.image,
        name: req.body.name,
        genre: req.body.genre,
        station: req.body.station,
        lat: req.body.lat,
        lng: req.body.lng
    })
    .then(() => knex.select().from('wishlist'))
    .then((datas) => res.send(datas))
    .catch(err => console.log('error:', err));
});

//put
app.put('/wish/:id', async (req, res) => {
    await knex('wishlist').where('id', req.params.id)
        .update({
            image: req.body.image,
            name: req.body.name,
            genre: req.body.genre,
            station: req.body.staion,
            lat: req.body.lat,
            lng: req.body.lng
        })
        .then(() => knex.select().from('wishlist'))
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});

//delete
app.delete('/wish/:id', async (req, res) => {
    await knex('wishlist').where('id', req.params.id)
        .del()
        .then(() => knex.select().from('wishlist'))
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});


//favorite table
//get all favorite list
app.get('/favs', async (req, res) => {
    await knex.select().from('favorite')
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});

//get single list

//post
app.post('/favs', async (req, res) => {
    await knex('favorite').insert({
        image: req.body.image,
        name: req.body.name,
        comment: req.body.comment,
        genre: req.body.genre,
        lat: req.body.lat,
        lng: req.body.lng
    })
    .then(() => knex.select().from('favorite'))
    .then((datas) => res.send(datas))
    .catch(err => console.log('error:', err));
});

//put
app.put('/favs/:id', async (req, res) => {
    await knex('favorite').where('id', req.params.id)
        .update({
            image: req.body.image,
            name: req.body.name,
            comment: req.body.comment,
            genre: req.body.genre,
            lat: req.body.lat,
            lng: req.body.lng
        })
        .then(() => knex.select().from('favorite'))
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});

//delete
app.delete('/favs/:id', async (req, res) => {
    await knex('favorite').where('id', req.params.id)
        .del()
        .then(() => knex.select().from('favorite'))
        .then(datas => res.send(datas))
        .catch(err => console.log('error:', err));
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

module.exports = app;
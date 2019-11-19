const express = require('express');
const path = require('path');
const db = require('./db.js');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../static')));
// app.use(express.static(path.join(__dirname, '../static/index.html')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'static/index.html'));
});

app.listen(PORT, () => console.log('listening'));

// app.get('/api/people', (req, res, next) => {
//     Person.findAll()
//         .then(people => {
//             res.send(people);
//             res.statusCode = 400;
//         })
//         .catch(e => {
//             console.log('people error: ', e)
//             next(e)
//         })
// });

// app.get('/api/places', (req, res, next) => {
//     Place.findAll()
//         .then(places => {
//             res.send(places);
//             res.statusCode = 400;
//         })
//         .catch(e => {
//             console.log('places error: ', e)
//             next(e)
//         })
// })

// app.get('/api/things', (req, res, next) => {
//     Thing.findAll()
//         .then(things => {
//             res.send(things);
//             res.statusCode = 400;
//         })
//         .catch(e => {
//             console.log('things error: ', e)
//             next(e)
//         })
// })

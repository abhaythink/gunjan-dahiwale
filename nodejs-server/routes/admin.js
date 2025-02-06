const express = require('express');
const Router = express.Router();

const path = require('../util/path');


Router.get('/add-name', (req, res, next) => {
    res.send('<html><form action="/name" method="POST"><input type="text" name="title"/> <input type="phone" name="Phone no."> <button type="submit">submit</button> </form></html>');
})

Router.use('/', (req, res, next) => {
    res.send('<h1>Hello from Expressjs</h1>');
})


Router.post('/name', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
})

module.exports = Router
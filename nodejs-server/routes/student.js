const express = require('express');
const Router = express.Router();

Router.get('/add-student', (req, res, next) => {
    res.send('<html><form action="/name" method="POST"><input type="text" name="Student name"/> <input type="phone" name="Phone no."><input type="email" name="Email"/><button type="submit">submit</button> </form></html>');
})

Router.use('/', (req, res, next) => {
    res.send('<h1>Hello from Expressjs</h1>');
})

Router.post('/name', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
})

module.exports = Router
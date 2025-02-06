const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');
const Joi = require('joi');
const e = require('express');
// const server = http.createServer(routes)

app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}));

// app.use('/admin', adminRoutes);
// app.use('/student', studentRoutes);

// app.use((req, res, next) =>{
//     res.status(404).send('<h1>Page Not Found</h1>');
// })

let students= [
    {id:1, name:'Gunjan', email: 'gunjan@gmail.com'},
    {id:2, name:'Pranoti', email: 'pranoti@gmail.com'},
    {id:3, name:'Bhagyashree', email: 'bhagi@gmail.com'}
]

app.get('/api/student', (req, res) => {
    res.send(students);
})
app.get('/api/student/:id', (req, res) => {
    let findStudent = students.find(x => x.id === parseInt(req.params.id));
    if(!findStudent) res.status(404).send('Page does not exists');
    res.send(findStudent);
})

app.post('/api/student', (req, res) => {
    const schema = Joi.object(
        {
            email: Joi.string().email().required(),
            name: Joi.string().min(3).required()
        }
    );

    const {error}= schema.validate(req.body);
    if(error)
    {
        res.status(404).send(error.details[0].message);
        return;
    }
    const std = {
        id : students.length + 1,
        name : req.body.name,
        email : req.body.email,
    }
    students.push(std);
    res.send(students);
})

app.put('/api/student/:id', (req, res) => {
    //checks the id
    let findStudent = students.find(x => x.id === parseInt(req.params.id));
    if(!findStudent) res.status(404).send('Page does not exists');

    //checks input validation
    const schema = Joi.object(
        {
            email: Joi.string().email().required()
        }
    );

    const {error}= schema.validate(req.body);
    if(error)
    {
        res.status(404).send(error.details[0].message);
        return;
    }

    //update
    findStudent.email = req.body.email;

    //sends the response
    res.send(students);
}); 

app.delete('/api/student/:id', (req, res) => {
    //checks id
    let findStudent = students.find(x => x.id === parseInt(req.params.id));
    if(!findStudent) res.status(404).send('Page does not exists');

    //delete
    const index = students.indexOf(findStudent);
    students.splice(index, 1);
    res.send(students); 
})
app.listen(3000)
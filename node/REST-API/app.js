// const express = require('express');
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
// const routes = require('./routes/employee');
import {default as routes} from './routes/employee.js';

import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})


// Initialize multer
const upload = multer({ storage: storage });

// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.json({ message: 'File uploaded successfully', file: req.file });
});

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));



app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());

app.use('/api', routes);

app.listen(3000, () => {    
    console.log("Server running on port 3000");
})
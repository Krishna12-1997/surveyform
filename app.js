const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require ('express');
const app = express();

dotenv.config({path: './config.env'});
//const User = require('./model/userSchema');

app.use(express.json());
 
app.use(require('./Router/auth'));

dotenv.config({path: './config.env'});

require ('./db/conn');

// middleware

const middleware = (req, res, next) =>{
    console.log('Hello my middleware');
    next();
}

app.get('/', (req, res)=>{
    res.send('Hello world app');
})

app.get('/about', middleware, (req, res)=>{
    console.log('hello about');
    res.send('Hello world about server');
})

app.get('/surveys', (req, res)=>{
    res.send('Hello world contact');
})



app.listen(process.env.PORT, ()=>{
    console.log(`running on port ${process.env.PORT}`);
})
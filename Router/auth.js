const jwt = require('jsonwebtoken');
const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

Router.get('/', (req, res)=>{
    res.send('Hello world router');
})

//-----------Promise method--------

Router.post('/add', (req, res) =>{
    if(!req.body){
         res.send('User not found')
    }

    var user = new User({
        name: req.body.name,
        select: req.body.select
    })

    user.save(user)
})

module.exports = Router;
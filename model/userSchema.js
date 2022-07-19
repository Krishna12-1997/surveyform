const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    select:{
        type: String,
        required: true
    },
  
   
})


const User = mongoose.model('USER' , userSchema);

module.exports = User;
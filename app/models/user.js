const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Uname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'customer' }
},{timestamps: true});

const newUser =  mongoose.model('user',schema);

module.exports =newUser;
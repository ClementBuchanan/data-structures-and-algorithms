'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = 'COOL'

const users = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}); {toJSON: { virtuals: true }};

// Adds a virtual field to the schema. We can see it, but it never persists
// So, on every user object ... this.token is now readable!
users.virtual('token').get(function () {
    let token = {
        username: this.username,
    }
    return jwt.sign(token, SECRET);
});

users.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
    
});

// let bob = new user();
// bob.save({ username: 'bob', password: ''})

// BASIC AUTH
users.statics.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ username })
    const valid = await bcrypt.compare(password, user.password)
    if (valid) { return user; }
    throw new Error('Invalid User');
}

// BEARER AUTH
users.statics.authenticateWithToken = async function (token) {
    try {
        const parsedToken = jwt.verify(token, process.env.SECRET);
        const user = this.findOne({ username: parsedToken.username })
        if (user) { return user; }
        throw new Error("User Not Found");
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = mongoose.model('users', users);
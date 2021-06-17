'use strict';

const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = (require('bcrypt');
const SECRET = process.env.APP_SECRET || 'COOL';

const users = new mongoose.Schema ({
  username: {type: String, require: true, unique: true},
  password: {type: String, required: true} 
  }, 
})

module.exports = userModel;

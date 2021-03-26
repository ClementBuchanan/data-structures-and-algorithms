'use strict';

require('dotenv').config();
const server = require('./src/server.js');
// Start up DB Server
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

// Start the web server
mongoose.connect('mongodb://localhost:27017/auth', options)
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch(e => console.error('Could not start server', e.message));



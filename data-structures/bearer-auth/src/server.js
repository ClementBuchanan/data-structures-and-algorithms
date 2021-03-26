'use strict';

// require('dotenv').config();

//3rd party resources
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const PORT = process.env.PORT || 3333;
// const basicAuth = require('./auth/middleware/basic.js');
// const bearerAuth = require('./auth/middleware/bearer.js');

//other resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/auth-routes.js');

//prepareexpress app
const app = express();

//app level middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./public'));

//routes
app.use(authRoutes);

//catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on port, ${port}`);
    });
  }
};


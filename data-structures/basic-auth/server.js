'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');


//prepare the express app
const app = express();
//process the JSON input and put the data on req.body
app.use(express.json());
//process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');

// initializing express
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importing routes
const employee = require('./routes/employeeRoutes.js');

app.use('/api/v1',employee);


module.exports = app;
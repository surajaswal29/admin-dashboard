// import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// import cors
const cors = require('cors');

// initializing express
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importing routes
const employee = require('./routes/employeeRoutes.js');

app.use('/api/v1',employee);


module.exports = app;
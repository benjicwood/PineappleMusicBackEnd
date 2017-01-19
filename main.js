// express server
const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;
let path = require('path');

// body parser for support json encoded bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API router hookup
const apiRouter = require('./routes/router');
app.use('/api', apiRouter);

// mongodb hookup
const db = 'mongodb://localhost/pineapple';
const mongoose = require('mongoose');
mongoose.connect(db, function (err) {
  if (!err) {
    console.log(`connected to the Database: ${db}`);
  } else {
    console.log(`error connecting to the Database ${err}`);
  }
});

// basic paths setup
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(PORT, function (error, result) {
  if (error) console.log(error);
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;

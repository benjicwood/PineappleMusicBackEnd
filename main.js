const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;
let path = require('path');

const apiRouter = require('./routes/router');
app.use('/api', apiRouter);

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

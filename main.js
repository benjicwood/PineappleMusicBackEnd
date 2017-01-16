const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.status(200).json({status: 'OK'});
});

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(PORT, function (error, result) {
  if (error) console.log(error);
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;

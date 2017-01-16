const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.status(200).json({status: 'OK'});
});

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function (error, result) {
  if (error) console.log(error);
  console.log(`Listening on port 3000`);
});

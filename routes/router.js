const router = require('express').Router();

router.get('/', function (req, res) {
  res.send({
    version: '1.0.0'
  });
});

// router.get('/genre', function (req, res) {
//   controller.getGenres(req, function (error, data) {
//     if (error) res.status(500).send(error);
//     console.log('.get user query, success. Sending data.');
//     res.send(data);
//   });
// });

module.exports = router;

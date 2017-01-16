const router = require('express').Router();

router.get('/', function (req, res) {
  res.status(200).json({status: 'API OK'});
});

module.exports = router;

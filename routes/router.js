const router = require('express').Router();

router.get('/', function (req, res) {
  res.send({
    version: '1.0.0'
  });
});

router.get('/genre', function (req, res) {
  res.status(200).json({status: '/genre OK'}
  );
});

router.get('/instrument', function (req, res) {
  res.status(200).json({status: '/instrument OK'}
  );
});

module.exports = router;

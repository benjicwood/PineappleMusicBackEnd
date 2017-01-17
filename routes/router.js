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

router.get('/profile/band/:id', function (req, res) {
  res.status(200).json({status: '/profile/band/:id OK'}
  );
});

router.get('/profile/musician/:id', function (req, res) {
  res.status(200).json({status: '/profile/musician/:id OK'}
  );
});

router.post('/profile/musician', function (req, res) {
  res.status(200).json({status: 'POST /profile/musician OK'}
  );
});

module.exports = router;

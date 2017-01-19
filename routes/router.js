const router = require('express').Router();

const retrieve = require('../controllers/controller.js').retrieve;
const create = require('../controllers/controller.js').create;
const update = require('../controllers/controller.js').update;

router.get('/', function (req, res) {
  res.send({
    version: '1.0.0'
  });
});

router.get('/genre', function (req, res) {
  retrieve.genres(req, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/instrument', function (req, res) {
  retrieve.instruments(req, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/profile/band/:id', function (req, res) {
  retrieve.bandProfile(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/profile/musician/:id', function (req, res) {
  retrieve.musicianProfile(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    console.log('.get musician profile query success. Sending data.');
    res.send(data);
  });
});

router.get('/ilike/:id', function (req, res) {
  retrieve.iLike(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/likesme/:id', function (req, res) {
  retrieve.likesMe(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/matches', function (req, res) {
  retrieve.matches(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/profile/band', function (req, res) {
  create.bandProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/profile/musician', function (req, res) {
  create.musicianProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/connections', function (req, res) {
  create.connection(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/donotdisplay', function (req, res) {
  create.doNotDisplay(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

// update routes
router.post('/profile/band/:id', function (req, res) {
  update.bandProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/profile/musician/:id', function (req, res) {
  update.musicianProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

module.exports = router;

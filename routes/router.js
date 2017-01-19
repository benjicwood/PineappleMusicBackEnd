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
  retrieve.retrieveGenres(req, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/instrument', function (req, res) {
  retrieve.retrieveInstruments(req, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/profile/band/:id', function (req, res) {
  retrieve.retrieveBandProfile(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/profile/musician/:id', function (req, res) {
  retrieve.retrieveMusicianProfile(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    console.log('.get musician profile query success. Sending data.');
    res.send(data);
  });
});

router.get('/ilike/:id', function (req, res) {
  retrieve.retrieveILike(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/likesme/:id', function (req, res) {
  retrieve.retrieveLikesMe(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.get('/matches', function (req, res) {
  retrieve.retrieveMatches(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/profile/band', function (req, res) {
  create.createBandProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/profile/musician', function (req, res) {
  create.createMusicianProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/connections', function (req, res) {
  create.createConnection(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/donotdisplay', function (req, res) {
  create.createDoNotDisplay(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

// update routes
router.post('/profile/band/:id', function (req, res) {
  update.updateBandProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

router.post('/profile/musician/:id', function (req, res) {
  update.updateMusicianProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

module.exports = router;

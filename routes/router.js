const router = require('express').Router();

const retrieve = require('../controllers/controller.js').retrieve;
const create = require('../controllers/controller.js').create;
const update = require('../controllers/controller.js').update;

router.get('/', function (req, res) {
  res.send({
    version: '1.0.0'
  });
});

// /////////////// GET ROUTES //////////////////////
// GET all genres
router.get('/genre', function (req, res) {
  retrieve.genres(function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});
// GET all instruments
router.get('/instrument', function (req, res) {
  retrieve.instruments(function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});
// GET profile by type (band/musician) and id
router.get('/profile/:type/:id', function (req, res) {
  if (req.params.type === 'band') {
    retrieve.bandProfile(req.params.id, function (error, data) {
      if (error) res.status(500).send(error);
      res.send(data);
    });
  } else if (req.params.type === 'musician') {
    retrieve.musicianProfile(req.params.id, function (error, data) {
      if (error) res.status(500).send(error);
      res.send(data);
    });
  } else {
    res.status(500).send({error: 'Invalid :type parameter'});
  }
});
// GET for heaven connections - my heaven or my hell
// and their heaven connections
router.get('/connection/:connectiontype/:usertype/:id', function (req, res) {
  let connectionType = req.params.connectiontype;
  let userType = req.params.usertype;
  let id = req.params.id;
  retrieve.connection(connectionType, userType, id, function (error, data) {
    console.log(data);
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

// /////////////// POST ROUTES //////////////////////
// POST to retrieve match information
router.post('/matches', function (req, res) {
  retrieve.matches(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});
// POST to create band/musician profile
router.post('/profile/:type', function (req, res) {
  if (req.params.type === 'band') {
    create.bandProfile(req.body, function (error, data) {
      if (error) res.status(500).send(error);
      res.send(data);
    });
  } else if (req.params.type === 'musician') {
    create.musicianProfile(req.body, function (error, data) {
      if (error) res.status(500).send(error);
      res.send(data);
    });
  }
});
// POST connection (heaven/hell)
router.post('/connection', function (req, res) {
  create.connection(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});
// /////////////// UPDATE ROUTES //////////////////////
// POST to update band/musician profile
router.post('/profile/:type/:id', function (req, res) {
  let id = req.params.id;
  if (req.params.type === 'band') {
    update.bandProfile(req.body, id, function (error, data) {
      if (error) res.status(500).send(error);
      res.send(data);
    });
  } else if (req.params.type === 'musician') {
    update.musicianProfile(req.body, id, function (error, data) {
      if (error) res.status(500).send(error);
      res.send(data);
    });
  }
});

module.exports = router;

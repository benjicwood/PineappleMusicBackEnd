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
  retrieve.genres(req, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});
// GET all instruments
router.get('/instrument', function (req, res) {
  retrieve.instruments(req, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});
// GET profile by type (band/musician) and id
router.get('/profile/:type/:id', function (req, res) {
  retrieve.bandProfile(req.params.id, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

// router.get('/ilike/:id', function (req, res) {
//   retrieve.iLike(req.params.id, function (error, data) {
//     if (error) res.status(500).send(error);
//     res.send(data);
//   });
// });
//
// router.get('/likesme/:id', function (req, res) {
//   retrieve.likesMe(req.params.id, function (error, data) {
//     if (error) res.status(500).send(error);
//     res.send(data);
//   });
// });
// /////////////// POST ROUTES //////////////////////
// POST to retrieve match information for user
router.post('/matches', function (req, res) {
  retrieve.matches(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});
// POST to create band/musician profile
router.post('/profile/band', function (req, res) {
  create.bandProfile(req.body, function (error, data) {
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

// /////////////// UPDATE ROUTES //////////////////////
// POST to update band/musician profile
router.post('/profile/:type/:id', function (req, res) {
  update.bandProfile(req.body, function (error, data) {
    if (error) res.status(500).send(error);
    res.send(data);
  });
});

module.exports = router;

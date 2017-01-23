const async = require('async');
const data = require('./test_data/test.data');
const models = require('../models/models');

function saveBand (cb) {
  models.Band.create(data.testBand, function (err, res) {
    if (err) cb(err);
    else {
      cb(null, {band: res});
    }
  });
}

function saveMusician (dataObj, cb) {
  models.Musician.create(data.testMusician, function (err, res) {
    if (err) cb(err);
    else {
      dataObj.musician = res;
      cb(null, dataObj);
    }
  });
}

function saveInstrument (dataObj, cb) {
  models.Instrument.create(data.testInstrument, function (err, res) {
    if (err) cb(err);
    else {
      dataObj.instrument = res;
      cb(null, dataObj);
    }
  });
}

function saveGenre (dataObj, cb) {
  models.Genre.create(data.testGenre, function (err, res) {
    if (err) cb(err);
    else {
      dataObj.genre = res;
      cb(null, dataObj);
    }
  });
}

function saveConnection (dataObj, cb) {
  models.Connection.create(data.testConnection, function (err, res) {
    if (err) cb(err);
    else {
      dataObj.connection = res;
      cb(null);
    }
  });
}

function saveTestData (cb) {
  async.waterfall([saveBand, saveMusician, saveInstrument, saveGenre, saveConnection], (err, ids) => {
    if (err) cb(err);
    else {
      console.log('Test data seeded successfully.');
      cb(null, ids);
    }
  });
}

module.exports = saveTestData;

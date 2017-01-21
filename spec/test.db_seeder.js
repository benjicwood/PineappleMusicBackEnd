const async = require('async');
const data = require('./test_data/test.data');

function saveBand (cb) {
  data.testBand.save(err => {
    if (err) cb(err);
    else cb();
  });
}

function saveMusician (cb) {
  data.testMusician.save(err => {
    if (err) cb(err);
    else cb();
  });
}

function saveInstrument (cb) {
  data.testInstrument.save(err => {
    if (err) cb(err);
    else cb();
  });
}

function saveGenre (cb) {
  data.testGenre.save(err => {
    if (err) cb(err);
    else cb();
  });
}

function saveConnection (cb) {
  data.testConnection.save(err => {
    if (err) cb(err);
    else cb();
  });
}

function saveTestData (cb) {
  async.waterfall([saveBand, saveMusician, saveInstrument, saveGenre, saveConnection], (err, ids) => {
    if (err) console.log(err);
    else {
      console.log('Test data seeded successfully.');
      cb(ids);
    }
  });
}

module.exports = saveTestData;

const models = require('../models/models.js');

const genres = function (callback) {
  models.Genre.find({}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const instruments = function (callback) {
  models.Instrument.find({}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const matches = function (query, callback) {
  if (query.type === 'musician') {
    models.Band.find({'instrument': query.instrument, 'genre': query.genre}, function (error, docs) {
      if (error) return callback(error);
      callback(null, docs);
    });
  }
  if (query.type === 'band') {
    models.Musician.find({'instrument': query.instrument, 'genre': query.genre}, function (error, docs) {
      if (error) return callback(error);
      callback(null, docs);
    });
  }
};

const bandProfile = function (query, callback) {
  models.Band.find({'_id': query}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const musicianProfile = function (query, callback) {
  models.Musician.find({'_id': query}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const myHeavenOrHell = function (type, id, callback) {
  models.Connection.find({'type': type, 'source_id': id}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const theirHeaven = function (id, callback) {
  models.Connection.find({'type': 'heaven', 'target_id': id}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

module.exports = {
  genres: genres,
  instruments: instruments,
  matches: matches,
  bandProfile: bandProfile,
  musicianProfile: musicianProfile,
  myHeavenOrHell: myHeavenOrHell,
  theirHeaven: theirHeaven
};

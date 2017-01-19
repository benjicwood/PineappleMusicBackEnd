const models = require('../models/models.js');

const retrieveGenres = function (query, callback) {
  models.Genre.find({}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const retrieveInstruments = function (query, callback) {
  models.Instrument.find({}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const retrieveMatches = function (query, callback) {
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

const retrieveBandProfile = function (query, callback) {
  models.Band.find({'_id': query}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const retrieveMusicianProfile = function (query, callback) {
  models.Musician.find({'_id': query}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const retrieveILike = function (query, callback) {
  models.Connection.find({'liked_by': query}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const retrieveLikesMe = function (query, callback) {
  models.Connection.find({'likes': query}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

module.exports = {
  retrieveGenres: retrieveGenres,
  retrieveInstruments: retrieveInstruments,
  retrieveMatches: retrieveMatches,
  retrieveBandProfile: retrieveBandProfile,
  retrieveMusicianProfile: retrieveMusicianProfile,
  retrieveILike: retrieveILike,
  retrieveLikesMe: retrieveLikesMe
};

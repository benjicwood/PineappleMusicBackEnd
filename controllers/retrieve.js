const models = require('../models/models.js');

const genres = function (query, callback) {
  models.Genre.find({}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const instruments = function (query, callback) {
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

const iLike = function (query, callback) {
  models.Connection.find({'liked_by': query}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const likesMe = function (query, callback) {
  models.Connection.find({'likes': query}, function (error, docs) {
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
  iLike: iLike,
  likesMe: likesMe
};

const async = require('async');
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

const connection = function (connectionType, userType, id, callback) {
  let arrProfile = [];
  if (connectionType === 'heaven' || connectionType === 'hell') {
    models.Connection.find({'type': connectionType, 'source_id': id}, function (error, arrConnections) {
      if (error) return callback(error);
      if (userType === 'band') {
        async.each(arrConnections, function (obj, eachCallback) {
          let musicianId = obj.target_id;
          models.Musician.find({'_id': musicianId}, function (error, profile) {
            if (error) return callback(error);
            if (profile.length > 0) {
              arrProfile.push(profile[0]);
            }
            eachCallback(null, arrProfile);
          });
        }, function (err) {
          if (err) throw err;
          callback(null, arrProfile);
        });
      } else if (userType === 'musician') {
        async.each(arrConnections, function (obj, eachCallback) {
          let bandId = obj.target_id;
          models.Band.find({'_id': bandId}, function (error, profile) {
            if (error) return callback(error);
            if (profile.length > 0) {
              arrProfile.push(profile[0]);
            }
            eachCallback(null, arrProfile);
          });
        }, function (err) {
          if (err) throw err;
          callback(null, arrProfile);
        });
      }
    });
  }
  if (connectionType === 'theirheaven') {
    models.Connection.find({'type': 'heaven', 'target_id': id}, function (error, arrConnections) {
      if (error) return callback(error);
      if (userType === 'band') {
        async.each(arrConnections, function (obj, eachCallback) {
          let musicianId = obj.source_id;
          models.Musician.find({'_id': musicianId}, function (error, profile) {
            if (error) return callback(error);
            if (profile.length > 0) {
              arrProfile.push(profile[0]);
            }
            eachCallback(null, arrProfile);
          });
        }, function (err) {
          if (err) throw err;
          callback(null, arrProfile);
        });
      } else if (userType === 'musician') {
        async.each(arrConnections, function (obj, eachCallback) {
          let bandId = obj.source_id;
          models.Band.find({'_id': bandId}, function (error, profile) {
            if (error) return callback(error);
            if (profile.length > 0) {
              arrProfile.push(profile[0]);
            }
            eachCallback(null, arrProfile);
          });
        }, function (err) {
          if (err) throw err;
          callback(null, arrProfile);
        });
      }
    });
  }
};

module.exports = {
  genres: genres,
  instruments: instruments,
  matches: matches,
  bandProfile: bandProfile,
  musicianProfile: musicianProfile,
  connection: connection
};

const models = require('../models/models.js');

const musicianProfile = function (query, callback) {
  let newProfile = new models.Musician(query);
  newProfile.save(function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const bandProfile = function (query, callback) {
  let newProfile = new models.Musician(query);
  newProfile.save(function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const connection = function (query, callback) {
  let newConnection = new models.Connection(query);
  newConnection.save(function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

module.exports = {
  bandProfile: bandProfile,
  musicianProfile: musicianProfile,
  connection: connection
};

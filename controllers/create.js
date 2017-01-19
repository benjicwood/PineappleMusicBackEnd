const models = require('../models/models.js');

const createMusicianProfile = function (query, callback) {
  let newProfile = new models.Musician(query);
  newProfile.save(function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const createBandProfile = function (query, callback) {
  let newProfile = new models.Musician(query);
  newProfile.save(function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const createConnection = function (query, callback) {
  let newConnection = new models.Connection(query);
  newConnection.save(function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const createDoNotDisplay = function (query, callback) {
  let newDoNotDisplay = new models.DoNotDisplay(query);
  newDoNotDisplay.save(query, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

module.exports = {
  createBandProfile: createBandProfile,
  createMusicianProfile: createMusicianProfile,
  createConnection: createConnection,
  createDoNotDisplay: createDoNotDisplay
};

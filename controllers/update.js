const models = require('../models/models.js');

const musicianProfile = function (query, id, callback) {
  models.Musician.update({'_id': id}, query, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const bandProfile = function (query, id, callback) {
  models.Band.update({'_id': id}, query, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

module.exports = {
  bandProfile: bandProfile,
  musicianProfile: musicianProfile
};

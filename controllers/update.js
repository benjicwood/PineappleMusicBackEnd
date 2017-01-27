const models = require('../models/models.js');

const musicianProfile = function (query, id, callback) {
  models.Musician.findOneAndUpdate({'_id': id}, query, {new: true}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

const bandProfile = function (query, id, callback) {
  models.Band.findOneAndUpdate({'_id': id}, query, {new: true}, function (error, docs) {
    if (error) return callback(error);
    callback(null, docs);
  });
};

module.exports = {
  bandProfile: bandProfile,
  musicianProfile: musicianProfile
};

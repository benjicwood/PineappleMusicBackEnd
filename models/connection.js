let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ConnectionSchema = new Schema({
  'liked_by': String,
  'liked': String,
  'created_at': Date
},
  {
    collection: 'connection'
  });

module.exports = mongoose.model('connection', ConnectionSchema);

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ConnectionSchema = new Schema({
  'type': String,
  'source_id': String,
  'target_id': String,
  'created_at': String
},
  {
    collection: 'connection'
  });

module.exports = mongoose.model('connection', ConnectionSchema);

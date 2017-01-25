let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BandSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  phone_number: {
    type: Number,
    required: false
  },
  user_name: {
    type: String,
    required: true
  },
  profile_pic: {
    type: String,
    required: false
  },
  join_date: {
    type: String,
    required: false
  },
  location: {
    type: Object,
    required: false
  },
  instrument: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  last_seen: {
    type: String,
    required: false
  }
},
  {
    collection: 'band'
  });

module.exports = mongoose.model('band', BandSchema);

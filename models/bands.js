let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BandSchema = new Schema({
  type: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  profile_pic: {
    type: String,
    required: true
  },
  join_date: {
    type: Date,
    required: true
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
    type: Date,
    required: true
  }
},
  {
    collection: 'band'
  });

module.exports = mongoose.model('band', BandSchema);

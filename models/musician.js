let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MusicianSchema = new Schema({
  type: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phone_number: {
    type: Number,
    required: false
  },
  username: {
    type: String,
    required: false
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
    required: false
  },
  genre: {
    type: String,
    required: false
  },
  last_seen: {
    type: String,
    required: false
  }
},
  {
    collection: 'musician'
  });

module.exports = mongoose.model('musician', MusicianSchema);

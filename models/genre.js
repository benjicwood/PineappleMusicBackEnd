let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GenreSchema = new Schema({
  name: {
    type: String,
    required: true
  }
},
  {
    collection: 'genre'
  });

module.exports = mongoose.model('genre', GenreSchema);

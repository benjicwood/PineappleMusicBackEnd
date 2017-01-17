let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DoNotDisplaySchema = new Schema({
  'hated_by': String,
  'i_hate': String
},
  {
    collection: 'donotdisplay'
  });

module.exports = mongoose.model('donotdisplay', DoNotDisplaySchema);

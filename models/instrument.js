let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let InstrumentSchema = new Schema({
  name: {
    type: String,
    required: true
  }
},
  {
    collection: 'instrument'
  });

module.exports = mongoose.model('instrument', InstrumentSchema);

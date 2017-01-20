const fs = require('fs');
const path = require('path');

let musician = JSON.parse(fs.readFileSync(path.join(__dirname, './test.musician.json'), 'utf8'));
let band = JSON.parse(fs.readFileSync(path.join(__dirname, './test.band.json'), 'utf8'));
let genre = JSON.parse(fs.readFileSync(path.join(__dirname, './test.genre.json'), 'utf8'));
let instrument = JSON.parse(fs.readFileSync(path.join(__dirname, './test.instrument.json'), 'utf8'));
let connection = JSON.parse(fs.readFileSync(path.join(__dirname, './test.connection.json'), 'utf8'));
let donotdisplay = JSON.parse(fs.readFileSync(path.join(__dirname, './test.donotdisplay.json'), 'utf8'));

module.exports = {
  testMusician: musician,
  testBand: band,
  testInstrument: instrument,
  testGenre: genre,
  testConnection: connection,
  testDonotdisplay: donotdisplay
};

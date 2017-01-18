const fs = require('fs');
const path = require('path');

let musician = JSON.parse(fs.readFileSync(path.join(__dirname, './musician.json'), 'utf8'));
let band = JSON.parse(fs.readFileSync(path.join(__dirname, './band.json'), 'utf8'));
let genre = JSON.parse(fs.readFileSync(path.join(__dirname, './genre.json'), 'utf8'));
let instrument = JSON.parse(fs.readFileSync(path.join(__dirname, './instrument.json'), 'utf8'));
let connection = JSON.parse(fs.readFileSync(path.join(__dirname, './connection.json'), 'utf8'));
let donotdisplay = JSON.parse(fs.readFileSync(path.join(__dirname, './donotdisplay.json'), 'utf8'));

module.exports = {
  musician: musician,
  band: band,
  instrument: instrument,
  genre: genre,
  connection: connection,
  donotdisplay: donotdisplay
};

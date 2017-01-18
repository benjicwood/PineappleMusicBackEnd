const mongoose = require('mongoose');
const models = require('../models/models');
const data = require('./data');
const dbLocation = 'mongodb://localhost/pineapple';

mongoose.connect(dbLocation, function (error) {
  if (error) {
    console.log(error);
    process.exit();
  }
  data.band.forEach((bandObj) => {
    let band = new models.Band(bandObj);
    band.save(function (error, document) {
      if (error) {
        console.log(error);
        process.exit();
      }
      console.log(document);
    });
  });
  data.connection.forEach((connectionObj) => {
    let connection = new models.Connection(connectionObj);
    connection.save(function (error, document) {
      if (error) {
        console.log(error);
        process.exit();
      }
      console.log(document);
    });
  });
  data.donotdisplay.forEach((donotdisplayObj) => {
    let donotdisplay = new models.DoNotDisplay(donotdisplayObj);
    donotdisplay.save(function (error, document) {
      if (error) {
        console.log(error);
        process.exit();
      }
      console.log(document);
    });
  });
  data.genre.forEach((genreObj) => {
    let genre = new models.Genre(genreObj);
    genre.save(function (error, document) {
      if (error) {
        console.log(error);
        process.exit();
      }
      console.log(document);
    });
  });
  data.instrument.forEach((instrumentObj) => {
    let instrument = new models.Instrument(instrumentObj);
    instrument.save(function (error, document) {
      if (error) {
        console.log(error);
        process.exit();
      }
      console.log(document);
    });
  });
  data.musician.forEach(function (musicianObj) {
    let musician = new models.Musician(musicianObj);
    musician.save(function (error, document) {
      if (error) {
        console.log(error);
        process.exit();
      }
      console.log(document);
      console.log('Database Seeded');
      process.exit();
    });
  });
});

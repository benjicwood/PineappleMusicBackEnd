/* global describe, it, before, after */

const expect = require('chai').expect;
const request = require('supertest');
const mongoose = require('mongoose');

process.env.NODE_ENV = 'test';
const PORT = require('../config').PORT[process.env.NODE_ENV];
const ROOT = `http://localhost:${PORT}/api`;

require('../main.js');
const saveTestData = require('./test.db_seeder');

describe('API ROUTES', function () {
  let sampleIds;

  before(function (done) { // look into this
    mongoose.connection.once('connected', () => {
      mongoose.connection.db.dropDatabase();
    });
    saveTestData(function (err, ids) {
      if (err) {
        console.log(err);
        done();
      }
      sampleIds = ids;
      done();
    });
  });
  after(function (done) {
    mongoose.connection.db.dropDatabase();
    done();
  });

  describe('GET /api', function () {
    it('should return status 200 and {version: 1.0.0}', () => {
      request(ROOT)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(res.body.version).to.equal('1.0.0');
        });
    });
  });
  describe('GET /genre', function () {
    it('should return status 200 and have property "name"', (done) => {
      request(ROOT)
        .get('/genre')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          let genre = res.body.map(genre => genre);
          expect(res.statusCode).to.equal(200);
          expect(genre[0]).to.have.property('name');
          expect(res.body.name).to.not.equal(null);
          done();
        });
    });
  });
  describe('GET /instrument', function () {
    it('should return status 200 and have property "name"', (done) => {
      request(ROOT)
        .get('/instrument')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          let instrument = res.body.map(instrument => instrument);
          expect(res.statusCode).to.equal(200);
          expect(instrument[0]).to.have.property('name');
          expect(res.body.name).to.not.equal(null);
          done();
        });
    });
  });
  // update will final mandatory properties on band and musician
  describe('GET /profile/:type/:id', function () {
    let objKeys = [
      'type',
      'email',
      'phone_number',
      'username',
      'profile_pic',
      'join_date',
      'location',
      'instrument',
      'genre',
      'last_seen'
    ];
    it(':type "band" should return status 200 and properties', (done) => {
      let bandSamples = (sampleIds.band.map(band => band));
      let bandSampleIds = bandSamples[0]._id;
      request(ROOT)
        .get(`/profile/band/${bandSampleIds}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(bandSamples[0].toObject()).to.contain.all.keys(objKeys);
          expect(bandSamples[0].type).to.equal('band');
          expect(bandSamples[0].username).to.not.equal(null);
          expect(bandSamples[0].join_date).to.not.equal(null);
          expect(bandSamples[0].location).to.not.equal(null);
          expect(bandSamples[0].instrument).to.not.equal(null);
          expect(bandSamples[0].genre).to.not.equal(null);
          done();
        });
    });
    it(':type "musician" should return status 200 and properties', (done) => {
      let musicianSamples = sampleIds.musician.map(band => band);
      let musicianSampleIds = musicianSamples[0]._id;
      request(ROOT)
        .get(`/profile/musician/${musicianSampleIds}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(musicianSamples[0].toObject()).to.contain.all.keys(objKeys);
          expect(musicianSamples[0].type).to.eql('musician');
          expect(musicianSamples.username).to.not.equal(null);
          expect(musicianSamples.join_date).to.not.equal(null);
          expect(musicianSamples.location).to.not.equal(null);
          expect(musicianSamples.instrument).to.not.equal(null);
          expect(musicianSamples.genre).to.not.equal(null);
          done();
        });
    });
    it('returns an error when :type is not "band" or "musician"', (done) => {
      let musicianSamples = sampleIds.musician.map(band => band);
      let musicianSampleIds = musicianSamples[0]._id;
      let bandSamples = (sampleIds.band.map(band => band));
      let bandSampleIds = bandSamples[0]._id;
      request(ROOT)
        .get(`/profile/blah/${musicianSampleIds}`)
        .expect(500)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(500);
          expect(res.body.error).to.equal('Invalid :type parameter');
        });
      request(ROOT)
        .get(`/profile/blah/${bandSampleIds}`)
        .expect(500)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(500);
          expect(res.body.error).to.equal('Invalid :type parameter');
          done();
        });
    });
  });
});

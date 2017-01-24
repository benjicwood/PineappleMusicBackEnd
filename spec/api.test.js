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
  describe('GET /profile/:type/:id', function () {
    let objKeys = [
      'type',
      'user_name',
      'instrument',
      'genre'
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
          expect(bandSamples[0].user_name).to.not.equal(null);
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
          expect(musicianSamples[0].user_name).to.not.equal(null);
          expect(musicianSamples[0].instrument).to.not.equal(null);
          expect(musicianSamples[0].genre).to.not.equal(null);
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
  describe('GET /connection/:type/:id', function () {
    let objKeys = [
      'type',
      'source_id',
      'target_id'
    ];
    it(':type "heaven" (myHeaven) should return status 200 and properties', (done) => {
      let heavenSamples = (sampleIds.connection.filter(connection => {
        return connection.type === 'heaven';
      }));
      let heavenSampleIds = heavenSamples[0].source_id;
      request(ROOT)
        .get(`/connection/heaven/${heavenSampleIds}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(heavenSamples[0].toObject()).to.contain.all.keys(objKeys);
          expect(heavenSamples[0].type).to.equal('heaven');
          expect(heavenSamples[0].source_id).to.not.equal(null);
          expect(heavenSamples[0].target_id).to.not.equal(null);
          done();
        });
    });
    it(':type "hell" (myHell) should return status 200 and properties', (done) => {
      let hellSamples = (sampleIds.connection.filter(connection => {
        return connection.type === 'hell';
      }));
      let hellSampleIds = hellSamples[0].source_id;
      request(ROOT)
        .get(`/connection/hell/${hellSampleIds}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(hellSamples[0].toObject()).to.contain.all.keys(objKeys);
          expect(hellSamples[0].type).to.eql('hell');
          expect(hellSamples.source_id).to.not.equal(null);
          expect(hellSamples.target_id).to.not.equal(null);
          done();
        });
    });
    it(':type "theirheaven" (theirHeaven) should return status 200 and properties', (done) => {
      let theirHeavenSamples = (sampleIds.connection.filter(connection => {
        return connection.type === 'heaven';
      }));
      let theirHeavenSampleIds = theirHeavenSamples[0].target_id;
      request(ROOT)
        .get(`/connection/theirheaven/${theirHeavenSampleIds}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(theirHeavenSamples[0].toObject()).to.contain.all.keys(objKeys);
          expect(theirHeavenSamples[0].type).to.eql('heaven');
          expect(theirHeavenSamples.source_id).to.not.equal(null);
          expect(theirHeavenSamples.target_id).to.not.equal(null);
          done();
        });
    });
    it('returns an error when :type is not "heaven", "hell" or "theirheaven"', (done) => {
      let heavenSamples = (sampleIds.connection.filter(connection => {
        return connection.type === 'heaven';
      }));
      let heavenSampleIds = heavenSamples[0].source_id;
      let hellSamples = (sampleIds.connection.filter(connection => {
        return connection.type === 'hell';
      }));
      let hellSampleIds = hellSamples[0].source_id;
      let theirHeavenSamples = (sampleIds.connection.filter(connection => {
        return connection.type === 'heaven';
      }));
      let theirHeavenSampleIds = theirHeavenSamples[0].target_id;
      request(ROOT)
        .get(`/profile/blah/${heavenSampleIds}`)
        .expect(500)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(500);
          expect(res.body.error).to.equal('Invalid :type parameter');
        });
      request(ROOT)
        .get(`/profile/blah/${hellSampleIds}`)
        .expect(500)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(500);
          expect(res.body.error).to.equal('Invalid :type parameter');
        });
      request(ROOT)
        .get(`/profile/blah/${theirHeavenSampleIds}`)
        .expect(500)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(500);
          expect(res.body.error).to.equal('Invalid :type parameter');
          done();
        });
    });
  });
  describe('POST /profile/:type', () => {
    let testBandProfile = {
      type: 'band',
      user_name: 'testusername',
      instrument: 'testInstrument',
      genre: 'testGenre'
    };
    it('should post a profile object to /profile/band', (done) => {
      request(ROOT)
        .post('/profile/band')
        .send(testBandProfile)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(res.body.type).to.equal('band');
          expect(res.body.user_name).to.equal('testusername');
          expect(res.body.instrument).to.equal('testInstrument');
          expect(res.body.genre).to.equal('testGenre');
          done();
        });
    });
    let testMusicianProfile = {
      type: 'musician',
      user_name: 'testusername',
      instrument: 'testInstrument',
      genre: 'testGenre'
    };
    it('should post a profile object to /profile/musician', (done) => {
      request(ROOT)
        .post('/profile/musician')
        .send(testMusicianProfile)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(res.body.type).to.equal('musician');
          expect(res.body.user_name).to.equal('testusername');
          expect(res.body.instrument).to.equal('testInstrument');
          expect(res.body.genre).to.equal('testGenre');
          done();
        });
    });
    it('should not allow a post to /profile/:type with an empty object', (done) => {
      request(ROOT)
        .post('/profile/musician')
        .send({})
        .end(function (err, res) {
          if (err) throw err;
          done();
        });
    });
  });
  describe('POST /matches', () => {
    let testMusicianProfile = {
      type: 'musician',
      user_name: 'fancypants001',
      instrument: '5877c4893aecdd49742d833a',
      genre: '5877c48b3aecdd49742d8358'
    };
    it('sends a musician profile to retrieve matching bands', () => {
      request(ROOT)
        .post('/matches')
        .send(testMusicianProfile)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(res.body[0].type).to.equal('band');
          expect(res.body[0].user_name).to.not.equal(null);
          expect(res.body[0].instrument).to.not.equal(null);
          expect(res.body[0].genre).to.not.equal(null);
        });
    });
    it('sends a band profile to retrieve matching musicians', () => {
      let testBandProfile = {
        type: 'band',
        user_name: 'fancypants001',
        instrument: '5877c4893aecdd49742d833a',
        genre: '5877c48b3aecdd49742d8358'
      };
      request(ROOT)
        .post('/matches')
        .send(testBandProfile)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(res.body[0].type).to.equal('musician');
          expect(res.body[0].user_name).to.not.equal(null);
          expect(res.body[0].instrument).to.not.equal(null);
          expect(res.body[0].genre).to.not.equal(null);
        });
    });
  });
});

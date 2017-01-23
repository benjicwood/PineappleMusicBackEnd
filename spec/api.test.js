/* global describe, it, before, after */

const expect = require('chai').expect;
// const request = require('supertest');
const mongoose = require('mongoose');

process.env.NODE_ENV = 'test';
// const PORT = require('../config').PORT[process.env.NODE_ENV];
// const ROOT = `http://localhost:${PORT}/api`;

require('../main.js');
const saveTestData = require('./test.db_seeder');

describe('API ROUTES', function () {
  // let sampleIds;

  before(function (done) { // look into this
    mongoose.connection.once('connected', function () {
      mongoose.connection.db.dropDatabase();
    });
    saveTestData(function (err, ids) {
      if (err) {
        console.log(err);
        done();
      }
      // sampleIds = ids;
      done();
    });
  });
  after(function (done) {
    mongoose.connection.db.dropDatabase();
    done();
  });
  it('dummy test', function () {
    expect(true).to.equal(true);
  });

  // describe('GET /api', function () {
  //   it('should return status 200 and {version: 1.0.0}', function () {
  //     request(ROOT)
  //       .get('/')
  //       .expect(200)
  //       .end(function (err, res) {
  //         if (err) throw err;
  //         expect(res.statusCode).to.equal(200);
  //         expect(res.body.version).to.equal('1.0.0');
  //       });
  //   });
  // });
  // describe('GET /genre', function () {
  //   it('should return status 200 and property "name"', function () {
  //     request(ROOT)
  //       .get('/genre')
  //       .expect(200)
  //       .end(function (err, res) {
  //         if (err) throw err;
  //         expect(res.statusCode).to.equal(200);
  //         expect(res.body).to.have.property('name');
  //       });
  //   });
  // });
});

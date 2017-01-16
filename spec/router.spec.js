/* eslint-env mocha */
let server = require('../main');
let chai = require('chai');
let request = require('supertest');
let expect = chai.expect;

describe('checks API routes', function () {
  it('/api', function (done) {
    request(server)
      .get('/api')
      .end(function (err, res) {
        if (!err) {
          expect(res.body.version).to.be.ok;
          expect(res.statusCode).to.equal(200);
          done();
        }
      });
  });
  it('/api/genre', function (done) {
    request(server)
      .get('/api/genre')
      .end(function (err, res) {
        if (!err) {
          expect(res.body.status).to.be.ok;
          expect(res.statusCode).to.equal(200);
          done();
        }
      });
  });
  it('/api/instrument', function (done) {
    request(server)
      .get('/api/instrument')
      .end(function (err, res) {
        if (!err) {
          expect(res.body.status).to.be.ok;
          expect(res.statusCode).to.equal(200);
          done();
        }
      });
  });
});

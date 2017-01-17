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
  it('/api/profile/band/:id', function (done) {
    request(server)
      .get('/api/profile/band/12345')
      .end(function (err, res) {
        if (!err) {
          expect(res.body.status).to.be.ok;
          expect(res.statusCode).to.equal(200);
          done();
        }
      });
  });
  it('/api/profile/musician/:id', function (done) {
    request(server)
      .get('/api/profile/musician/12345')
      .end(function (err, res) {
        if (!err) {
          expect(res.body.status).to.be.ok;
          expect(res.statusCode).to.equal(200);
          done();
        }
      });
  });
  it('POST /api/profile/band', function (done) {
    request(server)
      .post('/api/profile/band')
      .end(function (err, res) {
        if (!err) {
          expect(res.body.status).to.be.ok;
          expect(res.statusCode).to.equal(200);
          done();
        }
      });
  });
});

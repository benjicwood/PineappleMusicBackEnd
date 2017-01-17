/* eslint-env mocha */
let server = require('../main');
let chai = require('chai');
let request = require('supertest');
let expect = chai.expect;

describe('checks API routes', function () {
  it('GET /api', function (done) {
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
  it('GET /api/genre', function (done) {
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
  it('GET /api/instrument', function (done) {
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
  it('GET /api/profile/band/:id', function (done) {
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
  it('GET /api/profile/musician/:id', function (done) {
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

  it('POST /api/profile/musician', function (done) {
    request(server)
      .post('/api/profile/musician')

  it('/api/ilike/:id', function (done) {
    request(server)
      .get('/api/ilike/12345')

  it('/api/match/band/:id', function (done) {
    request(server)
      .get('/api/match/band/12345')
      .end(function (err, res) {
        if (!err) {
          expect(res.body.status).to.be.ok;
          expect(res.statusCode).to.equal(200);
          done();
        }
      });
  });
});

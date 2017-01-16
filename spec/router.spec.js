/* eslint-env mocha */
let server = require('../main');
let chai = require('chai');
let request = require('supertest');
let expect = chai.expect;

describe('API main route', function () {
  it('should return version number', function (done) {
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
});

describe('api/genre', function () {
  it('OK', function (done) {
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
});

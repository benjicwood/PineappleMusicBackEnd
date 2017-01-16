/* eslint-env mocha */
describe('express server', function () {
  let server;
  beforeEach(function () {
    server = require('../main');
  });
  afterEach(function () {
    server.close();
  });
});

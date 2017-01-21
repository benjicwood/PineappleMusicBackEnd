// /* eslint-env mocha */
// let server = require('../main');
// let chai = require('chai');
// let request = require('supertest');
// let expect = chai.expect;
//
// describe('checks API routes', function () {
//   it('GET /api', function (done) {
//     request(server)
//       .get('/api')
//       .end(function (err, res) {
//         if (!err) {
//           expect(res.body.version).to.be.ok;
//           expect(res.statusCode).to.equal(200);
//           done();
//         }
//       });
//   });
//   // it('GET /api/genre', function (done) {
//   //   request(server)
//   //     .get('/api/genre')
//   //     .end(function (err, res) {
//   //       if (!err) {
//   //         expect(res.body.status).to.be.ok;
//   //         expect(res.statusCode).to.equal(200);
//   //         done();
//   //       }
//   //     });
//   // });
// //   it('GET /api/instrument', function (done) {
// //     request(server)
// //       .get('/api/instrument')
// //       .end(function (err, res) {
// //         if (!err) {
// //           expect(res.body.status).to.be.ok;
// //           expect(res.statusCode).to.equal(200);
// //           done();
// //         }
// //       });
// //   });
// //   it('GET /api/profile/:type/:id', function (done) {
// //     request(server)
// //       .get('/api/profile/band/12345')
// //       .end(function (err, res) {
// //         if (!err) {
// //           expect(res.body.status).to.be.ok;
// //           expect(res.statusCode).to.equal(200);
// //           done();
// //         }
// //       });
// //   });
// //   it('GET /api/connection/:type/:id', function (done) {
// //     request(server)
// //       .get('/api/ilike/12345')
// //       .end(function (err, res) {
// //         if (!err) {
// //           expect(res.body.status).to.be.ok;
// //           expect(res.statusCode).to.equal(200);
// //           done();
// //         }
// //       });
// //   });
// //   it('POST /api/matches', function (done) {
// //     request(server)
// //       .get('/api/match/musician/12345')
// //       .end(function (err, res) {
// //         if (!err) {
// //           expect(res.body.status).to.be.ok;
// //           expect(res.statusCode).to.equal(200);
// //           done();
// //         }
// //       });
// //   });
// //   it('POST /api/profile/:type', function (done) {
// //     request(server)
// //       .post('/api/profile/band')
// //       .end(function (err, res) {
// //         if (!err) {
// //           expect(res.body.status).to.be.ok;
// //           expect(res.statusCode).to.equal(200);
// //           done();
// //         }
// //       });
// //   });
// //   it('POST /api/connection', function (done) {
// //     request(server)
// //       .post('/api/connections')
// //       .end(function (err, res) {
// //         if (!err) {
// //           expect(res.body.status).to.be.ok;
// //           expect(res.statusCode).to.equal(200);
// //           done();
// //         }
// //       });
// //   });
// });

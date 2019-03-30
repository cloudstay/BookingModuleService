const express = require('express');
const supertest = require('supertest');
// import request from './request';
const Listing = require('../database/schema')

test('Expect schema makes a new  object', () => {
    expect(typeof new Listing).toBe('object');
});





// describe('service test', function() {
//     var app = express();
//     supertest(app)
//         .end(function(err, res) {
//             if (err) throw err;
//         });
// });












// describe('service test', function() {
//     var app = express();
//     var server;

//     beforeEach(function() {
//         server = app.listen(4005);
//     });
//     afterEach(function() {
//         server.close();
//     });
//     supertest('Expect schema makes a new  object', () => {
//         expect(typeof seedMongo.schema).toBe('object');
//     });
    
//     // test('if GET request with params in range of 001-100 outputs status code of 200', function() {
//     //     var params = 11;
//     //     supertest(app).get(`/api/rooms?id=${params}`).expect(200);
//     //     done();
//     // });
//     // test('if GET request with params in different range outputs status code of 404', function() {
//     //     var params = 111;
//     //     supertest(app).get(`/api/rooms?id=${params}`).expect(404);
//     //     done();
//     // });
// });
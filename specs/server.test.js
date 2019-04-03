const express = require('express');
const request = require('supertest');
const $ = require('jquery');

var app = express();
var server;


describe('Test the root path and statuses of API calls', function() {
    
    beforeAll(function() {
        server = app.listen(8080);
    });

    afterAll(function() {
        server.close();
    });

    test('if GET request with listing_id within range of 100-200 outputs status code of 200', (done) => {
        var params = 101;
        request(server).get(`/api/rooms?id=${params}`).expect(200);
        done();
        });
        
    test('GET request with listing_id in different range outputs status code of 404', (done) => {
        var params = 201;
        request(server).get(`/api/rooms?id=${params}`).expect(404);
        done();
    });
});

describe('test API call data', function() {

    test('if there are 100 listings in database and we get them all', () => {
        $.ajax({
            url: 'http://localhost:3005/api/rooms',
            type: 'GET',
            success: (data) => {
            expect(data.length).toBe(100);
            }
        });
    });

    test('if every listing\'s  max_occupancy and cost_per_night are stored as a numbers', () => {
        $.ajax({
            url: 'http://localhost:3001/api/testing',
            type: 'GET',
            success: (data) => {
            var randomIndex = Math.ceil( (Math.random() * 100) + 100 );
            expect(typeof data[randomIndex].max_occupancy).toBe('number');
            expect(typeof data[randomIndex].cost_per_night).toBe('number');
            }
        });
    });

    test('if every listing\'s  FROM-date and TO-date are stored as JS DATE objects', () => {
        $.ajax({
            url: 'http://localhost:3001/api/testing',
            type: 'GET',
            success: (data) => {
            var randomIndex = Math.ceil( (Math.random() * 100) + 100 );
            expect(typeof data[randomIndex].from_date).toBe('object');
            expect(typeof data[randomIndex].to_date).toBe('object');
            }
        });
    });
});


describe('Test the root path and statuses of API calls', function() {
    test('if all 100 listings exist in database', () => {
        app.get('/api/rooms?id=listing_id=120', function(req, res) {
            res.status(200).json([
                {
                    "_id": "5ca3b39b736d3cdfa4e49296",
                    "listing_id": "120",
                    "max_occupancy": 4,
                    "cost_per_night": 187,
                    "from_date": "2019-01-25T00:06:14.222Z",
                    "to_date": "2019-01-25T00:06:14.222Z",
                    "__v": 0
                },
                {
                    "_id": "5ca3b39b736d3cdfa4e49297",
                    "listing_id": "120",
                    "max_occupancy": 4,
                    "cost_per_night": 187,
                    "from_date": "2019-02-05T23:27:27.988Z",
                    "to_date": "2019-02-05T23:27:27.988Z",
                    "__v": 0
                },
                {
                    "_id": "5ca3b39b736d3cdfa4e49298",
                    "listing_id": "120",
                    "max_occupancy": 4,
                    "cost_per_night": 187,
                    "from_date": "2019-05-28T14:36:02.151Z",
                    "to_date": "2019-05-28T14:36:02.151Z",
                    "__v": 0
                },
                {
                    "_id": "5ca3c0987a47b2e998fa5ba0",
                    "listing_id": "120",
                    "max_occupancy": 2,
                    "cost_per_night": 5,
                    "from_date": "2019-05-25T01:14:04.530Z",
                    "to_date": "2019-05-25T01:14:04.530Z",
                    "__v": 0
                },
                {
                    "_id": "5ca3c0987a47b2e998fa5ba1",
                    "listing_id": "120",
                    "max_occupancy": 2,
                    "cost_per_night": 5,
                    "from_date": "2019-04-27T09:21:27.583Z",
                    "to_date": "2019-04-27T09:21:27.583Z",
                    "__v": 0
                }
            ]);
        });

        request(app)
            .get('/user')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '5')
            .expect(200)
            .end(function(err, res) {
              if (err) throw err;
            });
    });
});
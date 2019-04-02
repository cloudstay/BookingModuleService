var express  = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!!!')
// });
// app.listen(3005);

var port = 3005;
app.use(express.static(__dirname + 'public'));
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
})
//______________________________________________
var getData = require('../database/getData.js');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());

// first part is router // second is controllers
app.get('/api/rooms', function(req,res) {
  // console.log(req);
  var query = req.query.listing_id;
  // console.log(typeof query);
  var callback = function(result) {
    res.send(result);
  };
  getData(query, callback);
})
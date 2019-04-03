var mongoose = require('mongoose');
const db = mongoose.connection;

const server = '127.0.0.1:27017';
const database = 'reservations'
mongoose.connect(`mongodb://${server}/${database}`,{useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));

// this schema below is for pushing new reservations
// for more interactive real website with POST requests

// var listingSchema = new mongoose.Schema({
//   listing_id: String,
//   max_occupancy: Number,
//   cost_per_night: Number,
// 	 Reservations: [
// 	  {
//       fromDate: Date,
//       toDate: Date,
//       numberOfDays: Number,
//       cleaningFee: Number,
//       serviceFee: Number,
//       total_cost: Number
//     }
//   ]
// });


// this schema below is to fake some data to render on the screen price, availability etc for each listing
// serviceFee, cleaning fee and total will be handled on the client-side
var reservationSchema = new mongoose.Schema({
    listing_id: String,
    max_occupancy: Number,
    cost_per_night: Number,
    from_date: Date,
    to_date: Date
  });

var Reservation = mongoose.model('Reservation', reservationSchema);

getData = (params, callback) => {
  Reservation.find({listing_id: params}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(data);
      callback(data);
    }
  });
}
module.exports.getData = getData;
module.exports.reservations = Reservation;
module.exports.schema = reservationSchema;
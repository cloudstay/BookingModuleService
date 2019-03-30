var mongoose = require('mongoose');

// this schema below is for pushing new reservations
// for more interactive real website with POST requests

// var listingSchema = new mongoose.Schema({
//   listing_id: String,
//   max_occupancy: Number,
//   cost_per_night: Number,
// 	Reservations: [
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


// this schema below to fake some data to render on the screen price, availability etc for each listing
// serviceFee, cleaning fee and total will be handled on the client-side
var listingSchema = new mongoose.Schema({
    listing_id: String,
    max_occupancy: Number,
    cost_per_night: Number,
    fromDate: Date,
    toDate: Date
  });
//

// Models
var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
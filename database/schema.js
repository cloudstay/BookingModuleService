var mongoose = require('mongoose');

var listingSchema = new mongoose.Schema({
    listing_id: String,
   	max_occupancy: Number,
   	cost_per_night: Number,
	  Reservations: [
		  {
        fromDate: Date,
        toDate: Date,
        numberOfDays: Number,
        cleaningFee: Number,
        serviceFee: Number,
        total_cost: Number
      }
    ]
  });

  
// Models
var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
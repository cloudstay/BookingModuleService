const mongoose = require('mongoose');
// helper function for server
getData = (params, callback) => {
    const db = mongoose.connection;
    const server = '127.0.0.1:27017'; // call your database 'reservations'
    const database = 'reservations';
    mongoose.connect(`mongodb://${server}/${database}`,{useNewUrlParser: true});
    var reservationSchema = new mongoose.Schema({
      listing_id: String,
      max_occupancy: Number,
      cost_per_night: Number,
      from_date: Date,
      to_date: Date
    });
    //const reservationSchema = require('./index.js');
    const Reservations = mongoose.model('Reservation', reservationSchema);

    Reservations.find({listing_id: params}, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        // console.log(data);
        callback(data);
      }
    });
  }
module.exports = getData;

// db.close();
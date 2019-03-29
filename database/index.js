const mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/reservations'; // call your database 'reservations'

const db = mongoose.connection;
mongoose.connect(dbUrl, {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Database is connected via Mongoose');
})

module.exports = db;
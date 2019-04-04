var db = require ('./index.js');
var faker = require ('faker');

// helper function 
function addDays(date) {
    // get date(day of the month)
    var day = date.getDate(); // returns a number

    // set new date of the month (handles when month ends and new starts)
    var newday = date.setDate( day + (Math.ceil(Math.random() * 6)) ); //returns a timestamp in milliseconds

    var newdate = new Date(newday); //new Date returns JS Date object

    return newdate;
    // return newdate.toJSON(); // change to string
};

var seedData = function() {

    // generate 100 listings
    for (var i = 100; i < 200; i++) {
        // for each listing we'll generate a random price and max occupancy
        var listing = i.toString();
        var maxOcc = Math.ceil(Math.random() * 6);
        var cost = Math.ceil(Math.random() * 300);
        var rating = Math.ceil(Math.random() * 5);

        var inputs = Math.ceil(Math.random() * 10); // for each listing generate a random number of reservations
        for (var j = 0; j < inputs; j++) {
            // var randomDate = time[(Math.floor(Math.random() * time.length))];
            var randomDate = faker.date.between('2019-01-01T16:13:38.924Z', '2019-05-31T16:13:38.924Z');
            var nextDate = addDays(randomDate);
            // console.log(db.reservations);
            var input = new db.reservations({
                listing_id: listing,
                max_occupancy: maxOcc,
                cost_per_night: cost,
                rating: rating,
                from_date: randomDate,
                to_date: nextDate

            });

            // console.log(input);
            input.save();
        }
    }
}

seedData();
module.exports = seedData;
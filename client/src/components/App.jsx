import React from 'react';
import $ from 'jquery';
import Head from './Head.jsx';
import Reservations from './Reservations.jsx';
import Test from './Test.jsx';
import TestCalendar from './TestCalendar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: '',
            maxOcc: 0,
            cost: 0,
            rating: 0,
            reservations: []
        }
    }
    
    componentDidMount(){
        $.ajax({
            url: 'http://localhost:3005/api/rooms',
            type: 'GET',
            data: { listing_id: "120"},
            success: (data) => {
                console.log('Success');
                console.log(data);
                // var data = JSON.parse(data);
                this.setState({
                    listing: data[0].listing_id,
                    masOcc: data[0].max_occupancy,
                    cost: data[0].cost_per_night,
                    rating: data[0].rating,
                    reservations: data
                })
            },
            error: function(error) {
                console.log(`Error! ${error}`);
            }
        })
    }

    render() {
        return (
            <div>
                <div><Head cost={this.state.cost} rating={this.state.rating}/></div>
                <div><Reservations /></div>
                {/* <div><Test /></div> */}
                {/* <div><TestCalendar /></div> */}
            </div>
        );
    }
}

export default App;
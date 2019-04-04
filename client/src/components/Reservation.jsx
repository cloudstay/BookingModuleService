import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    render() {
        return (
            <div>
                <div>I will be a booking component with check-in and check-out forms and calendars</div>
            </div>
        );
    }
}

export default Reservation;
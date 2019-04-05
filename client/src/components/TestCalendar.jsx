import React from 'react';
import Calendar from 'react-calendar';

class TestCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    render() {
        return (
            <div>
                <div><Calendar /></div>
            </div>
        );
    }
}

export default TestCalendar;
import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    date.preventDefault();
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <div>
        <div><label>DATES</label></div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Reservations;
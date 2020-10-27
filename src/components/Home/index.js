import React from 'react';
import Tabs from "../Tabs"
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './index.css'

class Home extends React.Component{
  state = {
  date: new Date(),
  }
  months =
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  onChange = date => this.setState({ date })
  render(){
    return(
      <div>
        <Tabs/>
        <div id='Calendar'>
          <DatePickerCalendar
            date={this.state.date}
            onDateChange={this.onChange}
            locale={enGB}
          />
        </div>
        <div id='events'>
          <p id='title'>Events</p>
          <p id='subtitle'>
          {this.months[this.state.date.getMonth()]} {this.state.date.getDate()}
          </p>
        </div>
        <div id='progress_bar'>
          <p id='title'>Progress</p>
        </div>
      </div>
    );
  }

}

export default Home

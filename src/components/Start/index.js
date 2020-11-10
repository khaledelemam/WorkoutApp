import React from 'react';
import StartTabs from "../StartTabs"
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './index.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddButton from "../Buttons/Button.js"
import ProgressBar from "../ProgressBar/ProgressBar.js"
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import {EventItems} from "./EventItems"


class Start extends React.Component{
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
        <StartTabs/>
        <div id='Calendar'>
          <DatePickerCalendar
            date={this.state.date}
            onDateChange={this.onChange}
            locale={enGB}
          />
        </div>
        <div id='events'>
          <p id='events_title'>Events</p>
          <p id='subtitle'>
          {this.months[this.state.date.getMonth()]} {this.state.date.getDate()}
          </p>
          <div className='fab'>
            <Fab color="primary" onClick={() => { alert('Sign in to add event.') }}>
              <AddIcon />
            </Fab>
          </div>
        </div>
        <div id='progress_bar'>
          <p id='progress_title'>Progress</p>
          <div className='fab'>
            <Fab color="primary" onClick={() => { alert('Sign in to add event.') }}>
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    );
  }

}

export default Start

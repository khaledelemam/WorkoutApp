import React from 'react';
import Tabs from "../AdminTabs"
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


class AdminHome extends React.Component{
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
          <p id='events_title'>Events</p>
          <p id='subtitle'>
          {this.months[this.state.date.getMonth()]} {this.state.date.getDate()}
          </p>
          <List>
            <div>
              <ul>
                {EventItems.map((item, index) => {
                  return (
                    func(item.date, item.events,this.state.date)
                  )
                })}
              </ul>
            </div>
          </List>
          <AddButton/>
        </div>
        <div id='progress_bar'>
          <p id='progress_title'>Progress</p>
          <div className="progress_container">
            <List>
              <div>
                <p id='progress_bar_title'>
                  Some Exercise #1
                </p>
                <ProgressBar percentage='75'/>
              </div>
              <div>
                <p id='progress_bar_title'>
                  Some Exercise #2
                </p>
                <ProgressBar percentage='30'/>
              </div>
              <div>
                <p id='progress_bar_title'>
                  Some Exercise #3
                </p>
                <ProgressBar percentage='50'/>
              </div>
              <div>
                <p id='progress_bar_title'>
                  Some Exercise #4
                </p>
                <ProgressBar percentage='90'/>
              </div>

            </List>
          </div>
          <AddButton/>
        </div>
      </div>
    );
  }

}

function func (date, list, currdate){
  if(formatDate(date)===formatDate(currdate)){
    return list.map((item, index) => (
      <List key={index}>
        <div>
          {item}
        </div>
      </List>
    ))
  };
}

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export default AdminHome

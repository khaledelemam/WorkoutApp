import React from 'react';
import './index.css'
import Progress from './Progress.js'

class ProjectBar extends React.Component {
  constructor(percentage) {
    this.percentage = percentage;
  }

  render() {
    return (
      <div>
        <ProgressBar percentage= {this.state.percentage}/>
      </div>
    )
  }
}

const ProgressBar = (props) => {
  return(
    <div className="progress_bar">
      <Progress percentage ={props.percentage}/>
    </div>
  )
};
export default ProgressBar

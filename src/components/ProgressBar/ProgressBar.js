import React from 'react';
import './index.css'


class ProjectBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      percentage:50
    }
  }

  render() {
    return (
      <div>
        <ProgressBar percentage= {this.state.percentage}/>
      </div>
    )
  }
}

const Progress = (props) => {
  return(
    <div className="progress">
    </div>
  )
};
const ProgressBar = (props) => {
  return(
    <div className="progress_bar">
      <Progress percentage ={props.percentage}/>
    </div>
  )
}
export default ProgressBar

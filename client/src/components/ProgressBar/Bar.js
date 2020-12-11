import React from 'react';
import './index.css'
import Progress from './Progress.js'

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.percentage = props;
  }
  render(){
    return(
      <div className="progress_bar">
        <Progress percentage ={this.props.percentage}/>
      </div>
    )
  }
}

export default Bar

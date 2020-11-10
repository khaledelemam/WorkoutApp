import React from 'react';
import './index.css'
import Bar from './Bar.js'

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.percentage = props;
  }

  render() {
    return (
      <div>
        <Bar percentage= {this.props.percentage}/>
      </div>
    )
  }
}
export default ProgressBar

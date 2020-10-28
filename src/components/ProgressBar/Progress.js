import React from 'react';
import './index.css'

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.percentage = props;
    this.progress = React.createRef();
  }

  componentDidMount() {
    const progress = this.progress.current;
    progress.style.width = `${this.props.percentage}%`;

  }
  render(){
    return(
      <div ref={this.progress} className='progress'>
      </div>
    )
  }
}

export default Progress

import React from 'react';
import Tabs from "../Tabs"
// import Checkbox from '@material-ui/core/Checkbox';

class ExerciseList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      chest: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
        <div className="Tabs">
        <Tabs />
        <h1>Exercise List Page</h1>

        <form>
        <label>
        <input
            name="chest"
            type="checkbox"
            checked={this.state.chest}
            onChange={this.handleInputChange} />

          Chest
        </label>
      </form>

        </div>
      );
    }
}

export default ExerciseList




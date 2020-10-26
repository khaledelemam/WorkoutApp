import React from 'react';
import Tabs from "../Tabs"
// import Checkbox from '@material-ui/core/Checkbox';

class ExerciseList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      chest: false,
      back: false,
      arms: false,
      legs: false,
      core: false,

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
        <br></br>
        <label>
        <input
            name="back"
            type="checkbox"
            checked={this.state.back}
            onChange={this.handleInputChange} />
          Back
        </label>
        <br></br>
        <label>
        <input
            name="arms"
            type="checkbox"
            checked={this.state.arms}
            onChange={this.handleInputChange} />
          Arms
        </label><br></br>
        <label>
        <input
            name="legs"
            type="checkbox"
            checked={this.state.legs}
            onChange={this.handleInputChange} />
        Legs
        </label><br></br>
        <label>
        <input
            name="core"
            type="checkbox"
            checked={this.state.core}
            onChange={this.handleInputChange} />
          Core
        </label>
      </form>

        </div>
      );
    }
}

export default ExerciseList




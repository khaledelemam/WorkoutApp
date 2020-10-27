import React from 'react';
import Tabs from "../Tabs"
import './index.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



class ExerciseList extends React.Component{
  render(){

  const {checkedA, 
    checkedB, 
    handleChange} = this.props;


    return (
        <div className="Tabs">
        <Tabs />
        <h1>Exercise List Page</h1>
        <div>
      <FormControlLabel className='label'
        control={<Checkbox checked={checkedA} onChange={handleChange} name="checkedA"  />}
        label="Chest"
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={checkedB} onChange={handleChange} name="checkedB" />}
        label= 'Back'
      />
     
    </div>

      
        </div>
      );
    }
}

export default ExerciseList




import React from 'react';
import Tabs from "../Tabs"
import './index.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



class ExerciseList extends React.Component{
  render(){

  const {checkedA, 
    checkedB, 
    checkedC,
    checkedD,
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
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={checkedC} onChange={handleChange} name="checkedC" />}
        label= 'Legs'
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={checkedD} onChange={handleChange} name="checkedD" />}
        label= 'Core'
      />

     
    </div>

      
        </div>
      );
    }
}

export default ExerciseList




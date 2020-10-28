import React from 'react';
import Tabs from "../Tabs"
import './index.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';



class ExerciseList extends React.Component{
  render(){

  const {checkedA, 
    checkedB, 
    checkedC,
    checkedD,
    handleChange} = this.props;


  //   <TextField
  //   className={classes.margin}
  //   id="input-with-icon-textfield"
  //   label="TextField"
  //   InputProps={{
  //     startAdornment: (
  //       <InputAdornment position="start"> <SearchIcon /> </InputAdornment>),
  //   }}
  // />

    return (
      <div>
      <div className="Tabs">
        <Tabs />
       </div>
       <div className = 'screen'>
      
        <h1>Exercise List Page</h1>
        <form  className='search' noValidate autoComplete="off">
        <TextField className='searchText'id="outlined-basic" label="Search" variant="outlined" InputProps={{
      endAdornment: (
        <InputAdornment > <SearchIcon /> </InputAdornment>),
    }} />  
        </form>
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




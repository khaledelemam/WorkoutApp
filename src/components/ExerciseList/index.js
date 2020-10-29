import React from 'react';
import Tabs from "../Tabs"
import './index.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";



class ExerciseList extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {checkedA:false, 
      checkedB: false,
      checkedC: false,
      checkedD: false,
    checkedAll:true};
  }

  handleChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value})
    


   
  }

  render(){

    return (
      <div>
      <div className="Tabs">
        <Tabs />
       </div>
       <div className = 'screen'>
      
        <h2>Exercises List </h2>
        
        <Grid item  xs={12}>
        <form  className='search' noValidate autoComplete="off">
        <TextField className='searchText'id="outlined-basic" label="Search"  InputProps={{
      endAdornment: (
        <InputAdornment > <SearchIcon /> </InputAdornment>),
    }} />  
      
        </form>
      </Grid>

      <Grid container >

      <Grid item xs={3} >

      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedAll} onChange={this.handleChange} name="checkedAll" />}
        label= 'Select All'
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedA} onChange={this.handleChange} name="checkedA"  />}
        label="Chest"
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedB} onChange={this.handleChange} name="checkedB" />}
        label= 'Back'
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedC} onChange={this.handleChange} name="checkedC" />}
        label= 'Legs'
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedD} onChange={this.handleChange} name="checkedD" />}
        label= 'Core'
      />
      </Grid>
     
      {!this.state.checkedAll &&
   <Grid className = "grid-align" >
      {this.state.checkedA &&
  
  <Grid item >
    <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Bench Press
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>

  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Push Ups
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>
  </Grid>
 
}


{this.state.checkedB &&
  
    <Grid item >
      <Grid className = 'grids'>
        <Card className = 'card' variant="outlined">
          <CardContent >
          <Typography variant="h5" component="h2">
            Barbell Rows
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </Grid>


    <Grid className = 'grids'>
        <Card className = 'card' variant="outlined">
          <CardContent >
          <Typography variant="h5" component="h2">
            Pull Ups
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </Grid>
    </Grid>
 
    
  }

{this.state.checkedC &&
  
  <Grid item>
    <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Squats
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>


  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Lunges
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>
  </Grid>

}

{this.state.checkedD &&
  
  <Grid item >
    <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Plank
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>


  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Crunch
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>
  </Grid>

  
}
</Grid>
  }




<Grid className = "grid-align2" >
{this.state.checkedAll&&
  <Grid item >
    <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Bench Press
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>

  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Push Ups
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>
  

      <Grid className = 'grids'>
        <Card className = 'card' variant="outlined">
          <CardContent >
          <Typography variant="h5" component="h2">
            Barbell Rows
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </Grid>


    <Grid className = 'grids'>
        <Card className = 'card' variant="outlined">
          <CardContent >
          <Typography variant="h5" component="h2">
            Pull Ups
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </Grid>
  
 
  
    <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Squats
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>


  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Lunges
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>
  
  
    <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Plank
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>


  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Crunch
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  </Grid>
  </Grid>

}


</Grid>

 
</Grid>
 


   
</div>

  
   </div>
      );
    }
}

export default ExerciseList







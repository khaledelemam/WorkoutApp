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
    this.buttonClick = this.buttonClick.bind(this);
    
    this.state = {checkedA:true, 
      checkedB: true,
      checkedC: true,
      checkedD: true,
    checkedAll:true,
  learnButtonBench: false,
  learnButtonPushups: false,
  learnButtonPullups: false,
  learnButtonRows: false,
  learnButtonSquats: false,
  learnButtonLunges: false,
  learnButtonPlank: false,
  learnButtonCrunch: false,};
  }

  handleChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value})

    if ((name == "checkedAll" )) {
      this.setState({checkedA:!this.state.checkedA})
      this.setState({checkedB:!this.state.checkedB})
      this.setState({checkedC:!this.state.checkedC})
      this.setState({checkedD:!this.state.checkedD})
    }
    
    
    
  }

 buttonClick(event) {
  const value= event.currentTarget.value === 'true' ? true: false;
  const name = event.currentTarget.name;
   this.setState({[name]:!value})
   
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
        control={<Checkbox checked={this.state.checkedAll}  onChange={this.handleChange}  color="primary" name="checkedAll" />}
        label= 'Select All'
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedA} onChange={this.handleChange}  color="primary" name="checkedA"  />}
        label="Chest"
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedB} onChange={this.handleChange} color="primary"  name="checkedB" />}
        label= 'Back'
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedC} onChange={this.handleChange} color="primary"  name="checkedC" />}
        label= 'Legs'
      />
      <br></br>
      <FormControlLabel className='label'
        control={<Checkbox checked={this.state.checkedD} onChange={this.handleChange} color="primary" name="checkedD" />}
        label= 'Core'
      />
      </Grid>
     



   <Grid className = "grid-align" >
      {this.state.checkedA  &&
  
  <Grid item >
    <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
        Bench Press
        </Typography>
        {this.state.learnButtonBench &&
          <Typography> Lie on ypur back on a bench with a barbell grasped in both hands. 
            Lower the barbell to chest level, then press the barbell upwards, 
            extending the arms until the elbows are locked out.</Typography>
        }
        </CardContent>
        <CardActions>
          <Button size="small"  onClick={this.buttonClick}  value ={this.state.learnButtonBench} name ='learnButtonBench'>Learn More</Button>
        </CardActions>
      </Card>
  </Grid>

  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Push Ups
        </Typography>
        {this.state.learnButtonPushups &&
          <Typography> Get down on all fours, placing your hands slightly wider than your shoulders. 
            Straighten your arms and legs. Lower your body until your chest nearly touches the floor. 
            Pause, then push yourself back up. Repeat. </Typography>
        }
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.buttonClick} value ={this.state.learnButtonPushups} name ='learnButtonPushups'>Learn More</Button>
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
          {this.state.learnButtonRows &&
          <Typography> Once you have your barbell loaded, stand with your feet shoulder-width apart.
              Bend your knees and lean forward from the waist. 
              Your knees should be bent, but your back stays straight, with your neck in line with your spine.
              Grab the bar with your hands (palms-down), just wider than shoulder-width apart and let it hang with your arms straight.
              Brace your core and squeeze your shoulders together to row the weight up until it touches your sternum, 
              then slowly lower it back down again.</Typography>
        }
          </CardContent>
          <CardActions>
            <Button size="small"onClick={this.buttonClick} value ={this.state.learnButtonRows} name ='learnButtonRows'>Learn More</Button>
          </CardActions>
        </Card>
    </Grid>


    <Grid className = 'grids'>
        <Card className = 'card' variant="outlined">
          <CardContent >
          <Typography variant="h5" component="h2">
            Pull Ups
          </Typography>
          {this.state.learnButtonPullups &&
          <Typography> Grab the pullup bar with your palms down (shoulder-width grip).
          Hang to the pullup-bar with straight arms and your legs off the floor.
          Pull yourself up by pulling your elbows down to the floor.
          Go all the way up until your chin passes the be bar.
          Lower yourself until your arms are straight. </Typography>
        }
          </CardContent>
          <CardActions>
            <Button size="small"onClick={this.buttonClick} value ={this.state.learnButtonPullups} name ='learnButtonPullups'>Learn More</Button>
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
        {this.state.learnButtonSquats &&
          <Typography> Stand with feet a little wider than hip width, toes facing front.
            Drive your hips back—bending at the knees and ankles and pressing your knees slightly open.
            Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back.
            Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle.
            Press into your heels and straighten legs to return to a standing upright position. </Typography>
        }
        </CardContent>
        <CardActions>
          <Button size="small"onClick={this.buttonClick} value ={this.state.learnButtonSquats} name ='learnButtonSquats'>Learn More</Button>
        </CardActions>
      </Card>
  </Grid>


  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Lunges
        </Typography>
        {this.state.learnButtonLunges &&
          <Typography> Stand tall with feet hip-width apart. Engage your core.
            Take astep forward with right leg. Start to shift your weight forward so heel hits the floor first.
            Lower your body until right thigh is parallel to the floor and right shin is vertical. 
            Lightly tap left knee to the floor while keeping weight in right heel.
            Press into right heel to drive back up to starting position.
            Repeat on the other side. </Typography>
        }
        </CardContent>
        <CardActions>
          <Button size="small"onClick={this.buttonClick} value ={this.state.learnButtonLunges} name ='learnButtonLunges'>Learn More</Button>
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
        {this.state.learnButtonPlank &&
          <Typography> Plant hands directly under shoulders (slightly wider than shoulder width) like you’re about to do a push-up.
            Ground toes into the floor and squeeze glutes to stabilize your body. 
            Neutralize your neck and spine by looking at a spot on the floor about a foot beyond your hands. Your head should be in line with your back.
            Hold the position for 20 seconds. </Typography>
        }
        </CardContent>
        <CardActions>
          <Button size="small"onClick={this.buttonClick} value ={this.state.learnButtonPlank} name ='learnButtonPlank'>Learn More</Button>
        </CardActions>
      </Card>
  </Grid>


  <Grid className = 'grids'>
      <Card className = 'card' variant="outlined">
        <CardContent >
        <Typography variant="h5" component="h2">
          Crunch
        </Typography>
        {this.state.learnButtonCrunch &&
          <Typography> Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale.
          Exhale and lift your upper body, keeping your head and neck relaxed.
          Inhale and return to the starting position. </Typography>
        }
        </CardContent>
        <CardActions>
          <Button size="small"onClick={this.buttonClick} value ={this.state.learnButtonCrunch} name ='learnButtonCrunch'>Learn More</Button>
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







import React from 'react';
import './index.css'
import Tabs from "../Tabs"
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'



const workoutNames = ["Cardio", "Back", "Legs", "Arms"]
  
const favNames = ["Abs", "Dumbbell"]

// Not sure how to style the grid without hooks, and we're using classes so we can't use hooks
/* const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }

})) */

class Workouts extends React.Component {
  state = {
    init: ''
  }
  
  constructor(props) {
      super(props)
  }


  render() {

    return (
    <div>
      <Tabs/>
      <div className = 'header1'>
         <h2>Custom Workouts</h2>
      </div>
      <Grid container spacing={3} justify= "center">
        <Grid item xs={3}>
          <Paper>{workoutNames[0]}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>{workoutNames[1]}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>{workoutNames[2]}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>{workoutNames[3]}</Paper>
        </Grid>
      </Grid>

      <div className = 'header2'>
        <h2>Favourite Workouts</h2>
      </div>
      <Grid container spacing={3} justify= "center">
        <Grid item xs={6}>
          <Paper>{favNames[0]}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>{favNames[1]}</Paper>
        </Grid>
      </Grid>
    </div>
    ) 
  }

}


export default Workouts
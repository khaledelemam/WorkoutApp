import React from 'react';
import './index.css'
import Tabs from "../Tabs"

import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

// Hardcoded values
import cardio from "../WorkoutPics/cardio.jpg"
import back from "../WorkoutPics/back.jpg"
import legs from "../WorkoutPics/legs.jpg"
import arm from "../WorkoutPics/arm.jpg"
import abs from "../WorkoutPics/abs.jpg"
import dumbbell from "../WorkoutPics/dumbbell.jpg"

const workoutNames = ["Cardio", "Back", "Legs", "Arms"]

const workouts = [
  {
    img: cardio,
    title: 'Cardio',
  },
  {
    img: back,
    title: 'Back',
  },
  {
    img: legs,
    title: 'Legs',
  },
  {
    img: arm,
    title: 'Arms',
  }
]
  
const favNames = ["Abs", "Dumbbell"]

const favWorkouts = [
  {
    img: abs,
    title: 'Abdominals',
  },
  {
    img: dumbbell,
    title: 'Dumbbell',
  }
]

class Workouts extends React.Component {
  state = {
    init: ''
  }


  render() {

    return (
    <div>
      <Tabs/>
      <div className = 'view'>  

        <h2>Custom Workouts</h2>
 
        <GridList className = 'gridList' cellHeight={180} cols={3}>
        {workouts.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon = {
                <IconButton aria-label={`info about ${tile.title}`} className = 'icon'>
                    <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          ))}
        </GridList>

        <div className = 'header2'>
          <h2>Favourite Workouts</h2>
        </div>
        
        <GridList className = 'gridList' cellHeight={180} cols={3}>
        {favWorkouts.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon = {
                <IconButton aria-label={`info about ${tile.title}`} className = 'icon'>
                    <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          ))}
        </GridList>

      </div>
    </div>
    ) 
  }

}


export default Workouts
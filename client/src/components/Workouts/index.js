import React from 'react';
import './index.css'
import Tabs from "../Tabs"

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import Button from '@material-ui/core/Button'
//import DeleteIcon from '@material-ui/icons/Delete'

// Hardcoded values
import cardio from "../WorkoutPics/cardio.jpg"
import back from "../WorkoutPics/back.jpg"
import legs from "../WorkoutPics/legs.jpg"
import arm from "../WorkoutPics/arm.jpg"
import abs from "../WorkoutPics/abs.jpg"
import dumbbell from "../WorkoutPics/dumbbell.jpg"


const workouts = [
  {
    img: cardio,
    title: 'Cardio',
    index: 0,
  },
  {
    img: back,
    title: 'Back',
    index: 1,
  },
  {
    img: legs,
    title: 'Legs',
    index: 2,
  },
  {
    img: arm,
    title: 'Arms',
    index: 3,
  }
]
  

const favWorkouts = [
  {
    img: abs,
    title: 'Abdominals',
    index: 0,
  },
  {
    img: dumbbell,
    title: 'Dumbbell',
    index: 1,
  }
]

const list = (type) => {
    if (type === 'custom')
      return workouts
    else if (type === 'favor')
      return favWorkouts
    else
      return []
}

class Workouts extends React.Component {
  state = {
    list: 'custom',
    index: 0
  }

  workRender(workout, list) {
    return(
      <div className = 'workoutInfo'>
        <h2>{workout.title}</h2>
        Lorem Ipsum
        <Button>Add</Button>
      </div>
    )
  }

  render() {

    return (
    <div>
      <Tabs/>
      <div className = 'view'>  

        <h2>Sample Workouts</h2>
 
        <GridList className = 'gridList' cellHeight={180} cols={3}>
        {workouts.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon = {
                <IconButton aria-label={`info about ${tile.title}`}
                  onClick={() => {
                    this.setState({
                      index: tile.index,
                      list: 'custom'
                    })
                  }}>
                    <InfoIcon className = 'icon'/>
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
                <IconButton aria-label={`info about ${tile.title}`}onClick={() => {
                    this.setState({
                      index: tile.index,
                      list: 'favor'
                    })
                  }}>
                    <InfoIcon className = 'icon'/>
                </IconButton>
              }
            />
          </GridListTile>
          ))}
    
          <h2>Custom Workouts</h2>
       
        </GridList>
        
      </div>
      {/* Render selected workout info, and keep track of its list*/}
      {this.workRender(list(this.state.list)[this.state.index], this.state.list)}

      

    </div>
    ) 
  }

}


export default Workouts
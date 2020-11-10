// Copy of Workouts with added functionality for Admins
import React from 'react';
import './index.css'
import Tabs from "../AdminTabs"

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import InfoIcon from '@material-ui/icons/Info'
import DeleteIcon from '@material-ui/icons/Delete'
// Hardcoded values
import cardio from "../WorkoutPics/cardio.jpg"
import back from "../WorkoutPics/back.jpg"
import legs from "../WorkoutPics/legs.jpg"
import arm from "../WorkoutPics/arm.jpg"
import abs from "../WorkoutPics/abs.jpg"
import dumbbell from "../WorkoutPics/dumbbell.jpg"

// const workoutNames = ["Cardio", "Back", "Legs", "Arms"]

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

// const favNames = ["Abs", "Dumbbell"]

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

// Determines which workout list is needed
const list = (type) => {
  if (type === 'custom')
    return workouts
  else if (type === 'favor')
    return favWorkouts
  else
    return []
}

class AdminWorkouts extends React.Component {
  state = {
    list: 'custom',
    index: 0
  }

  workRender(workout, list) {
    return(
      <div className = 'workoutInfo'>
        <h2>{workout.title}</h2>
        Lorem ipsum

        <Button>Add</Button>
        {/*Admin only privileges*/}
        <Button>Edit</Button>
        <IconButton>
          <DeleteIcon className = 'del'/>
        </IconButton>
      </div>
    )
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
                <IconButton aria-label={`info about ${tile.title}`}
                  onClick={() => {
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
        </GridList>

      </div>
      <div>
        {/*display selected workout, including info about its list*/}
        {this.workRender(list(this.state.list)[this.state.index], list(this.state.list))}
      </div>
    </div>
    )
  }

}


export default AdminWorkouts

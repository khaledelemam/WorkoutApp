import React from 'react';
import './styles.css'
import Tabs from "../Tabs"

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

import noPic from './default.jpg'

const friendList = [
    {
        name: 'John Doe',
        img: noPic,
        workouts: [],
        index: 0,
    },
    {
        name: 'Fred Bloggs',
        img: noPic,
        workouts: [],
        index: 1,
    },
    {
        name: 'Jean Dupont',
        img: noPic,
        workouts: [], 
        index: 2,  
    }
]
// Workouts that friends have (Organized together here for convenience)
const friendWorkouts = [
    ['Lorem ipsum', 'dolor sit amet', 'consectetur adipiscing elit'],
    ['consectetur adipiscing elit', 'dolor sit amet', 'Lorem ipsum'],
    ['sed do eiusmod', 'tempor incididunt', 'consectetur adipiscing elit'],
]

class Friends extends React.Component {
    state = {
        index: 0
    }

    // Display information about a friend
    frender(Friend) {
        return (
            <div className = 'profile'>
                <h1>{Friend.name}</h1>
                <h2>Workouts</h2>
                {friendWorkouts[Friend.index].map((workout) => 
                    <div key = {workout.length}>{workout}</div>
                )}
            </div>
        )
    }

    render () {
        return (
        <div>
            <Tabs/>
            <div className = 'list'>
              <GridList className = 'friendList' cellHeight={150} spacing={1} cols={1}>
              {friendList.map((tile) => (
                <GridListTile key={tile.name}>
                  <img src={tile.img} alt={tile.name} />
                  <GridListTileBar
                    title={tile.name}
                    actionIcon = {
                      <IconButton aria-label={`info about ${tile.name}`}
                        onClick={() => {
                            this.setState({index: tile.index})
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
                {this.frender(friendList[this.state.index])}
            </div>
        </div>
        )
    }

}

export default Friends
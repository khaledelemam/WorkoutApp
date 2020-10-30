import React from'react'
import './App.css';
import Home from "./components/Home"

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ExerciseList from "./components/ExerciseList"
import Workouts from "./components/Workouts"

library.add(far)

class App extends React.Component {
render() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() =>
                        (<Home/>)}/>
        <Route exact path='/ExerciseList' render={() =>
                        (<ExerciseList/>)}/>
        <Route exact path='/Workouts' render={() =>
                        (<Workouts/>)}/>

      </Switch>
    </BrowserRouter>
  </div>
  );
}
}

export default App;

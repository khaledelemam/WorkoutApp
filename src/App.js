import React from'react'
import './App.css';
import Home from "./components/Home"

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ExerciseList from "./components/ExerciseList"
import Workouts from "./components/Workouts"
import Friends from "./components/Friends"
import Signin from "./components/Signin"

library.add(far)

class App extends React.Component {
render() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() =>
                      (<Signin/>)}/>
        <Route exact path='/Home' render={() =>
                        (<Home/>)}/>
        <Route exact path='/ExerciseList' render={() =>
                        (<ExerciseList/>)}/>
        <Route exact path='/Workouts' render={() =>
                        (<Workouts/>)}/>
        <Route exact path='/Friends' render={() =>
                        (<Friends/>)}/>

      </Switch>
    </BrowserRouter>
  </div>
  );
}
}

export default App;

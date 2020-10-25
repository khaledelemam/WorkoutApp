import React from'react'
import './App.css';
import Tabs from "./components/Tabs"

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ExerciseList from "./components/ExerciseList"

library.add(far)

class App extends React.Component {
render() {
  return (
    <div>
    <BrowserRouter>
      <Switch> 
        <Route exact path='/' render={() => 
                        (<Tabs/>)}/>
        <Route exact path='/ExerciseList' render={() => 
                        (<ExerciseList/>)}/>
      </Switch>
    </BrowserRouter>
  </div>
  );
}
}

export default App;

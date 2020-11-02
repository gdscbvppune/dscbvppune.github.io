import React from 'react';
import Home from './Components/HomePage/Home'
 import Hackathon from './Components/HackathonPage/Hackathon';
// import Team from './Components/TeamPage/Team';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch >
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/OdeToCode">
          <Hackathon />
        </Route>
        {/* <Route path="/team">
        <Team />
      </Route> */}
      </Switch>
    </Router>

  )
}


export default App


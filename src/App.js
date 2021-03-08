import React from 'react';
import Home from './Components/HomePage/Home'
import Hackathon from './Components/HackathonPage/Hackathon';
import Team from './Components/TeamPage/Team';
// import Event from './Components/EventPage/Event';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      
      <Switch >
       
        <Route path="/" exact component={Home} />
        <Route path="/OdeToCode" component={Hackathon} />
        <Route path ="/team" component={Team} />
      </Switch>
    </Router>

  )
}


export default App


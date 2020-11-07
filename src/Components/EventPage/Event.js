import {Button} from 'reactstrap'
import './Event.css'
import {useState } from 'react'
import EventCard from './EventCard'
import React from 'react';

function Event() {
  const [upevent, setupevent] = useState(["upcoming  event 1", "upcoming event 2"])
  const [pastevent, setPastevent] = useState(["past event 1", "past event 2"])
  const [display, setDisplay] = useState(["upcoming  event 1", "upcoming event 2"])

  const upChange = event => {
    event.preventDefault();
    setDisplay([...upevent])
  }

  const pastChange = event => {
    event.preventDefault()
    setDisplay([...pastevent])
  }
  
  return (
    <div className="app">
      
      <div className="app__header">
      <h1>Events</h1>
      </div>
      <div className="app__events">
       <Button onClick={upChange} size="large" color="primary">Upcoming Events</Button>
       <Button onClick={pastChange} color="primary">Previous Events Events</Button>

      </div>

      {display.map(dis => (
        <EventCard info={dis}/>
      ))}
    </div>
  );
}

export default Event;

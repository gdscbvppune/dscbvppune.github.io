import React from 'react'
import "./Event.css"
import { Button } from 'react-bootstrap'

function EventCard(props) {
    return (
        <div className="event">
            <div className="event__info">
                <strong>{props.info}</strong>
            </div>

            <div className="event__date">
                <span className="event__date__logo">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                </span>
                <span className="event__date__date">
                    <p>date and time</p>
                </span>
            </div>

            <div className="event__last">
                <div className="event__author">
                    <span className="event__author__logo">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                    </span>
                    <span className="event__author__name">
                        <p>author name</p>
                    </span>
                </div>
                <div className="event__rsvp">
                    <Button variant="contained" color="primary">
                        RSVP
                   </Button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default EventCard

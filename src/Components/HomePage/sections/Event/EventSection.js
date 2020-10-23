import React from 'react';
import teamImage from '../../../../Assets/Images/teamImage.png';
import '../../HomeLeftSection.css';


function EventSection() {
  return (
    <div className="section ">
      <div className="row ">

        <div className="col-12 ">
          <h1 className="section-heading"><span style={{ color: "#3366ff" }}>Events</span></h1>
        </div>

        <div className="col-md-5  order-12 order-md-1 text-aligning">

          <p className="section-description">We are a group of designers, developers, managers
          and writers who come around the table to bring
          a change. We love to innovate, ideate and
          build technical solutions to common day to day
          life problems. We also organise webinars and
          workshops to inculcate a culture of technology.
         </p>
          
            <div className="section-button " style={{backgroundColor: "#3366ff"}}>See our events</div>
          
        </div>


        <div className="col-md-5  order-1 order-md-12 text-aligning">
          <img className="section-image" src={teamImage} alt="TEAM IMAGE"></img>
        </div>

      </div>
    </div>
  )
}


export default EventSection
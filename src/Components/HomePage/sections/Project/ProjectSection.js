import React from 'react';
import teamImage from '../../../../Assets/Images/teamImage.png';
import '../../HomeRightSection.css';


function TeamSection() {
  return (
    <div className="right-section ">
      <div className="row ">

        <div className="col-12 ">
          <h1 className="right-section-heading">Our <span style={{ color: "#ff0000" }}>projects</span></h1>
        </div>

        <div className="col-md-5   order-md-1 text-aligning">
          <img className="right-section-image" src={teamImage} alt="TEAM IMAGE"></img>
        </div>

        <div className="col-md-5 offset-md-2  order-md-12 text-aligning">

          <p className="right-section-description text-aligning">We are a group of designers, developers, managers
          and writers who come around the table to bring
          a change. We love to innovate, ideate and
          build technical solutions to common day to day
          life problems. We also organise webinars and
          workshops to inculcate a culture of technology.
         </p>
          <div className="centering-btn">
          <div className="right-section-button " style={{backgroundColor:"#ff0000"}}>See our projects</div>
          </div>
           
          
        </div>


        

      </div>
    </div>
  )
}


export default TeamSection
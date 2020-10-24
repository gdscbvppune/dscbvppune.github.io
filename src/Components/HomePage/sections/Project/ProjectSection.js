import React from 'react';
import teamImage from '../../../../Assets/Images/teamImage.png';
import '../../HomeRightSection.css';
import '../../sections/Hero/HeroSection.css'; 

import { Container,Row,Col,Button,Image} from 'react-bootstrap';

function TeamSection() {
  return (
    <section className="global-section">
    {/* <Container>
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
      
    </Container> */}



<Container className="text-center re-order">
                <Row>
                    
                    <Col lg={6} md={12} sm={12} className="first">
                        <Image className="img-fluid hero-image" src={teamImage}></Image>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="second">
                        <h1 className="home-header"><h1 className="section-heading">Our <span style={{ color: "#ff0000" }}>projects</span></h1></h1>
                        <p className="team-para">We are a group of designers, developers, managers and writers who come around the table to bring a change. We love to innovate, ideate and build technical solutions to common day to day life problems. We also organise webinars and workshops to inculcate a culture of technology.
                        </p>
                        <div className="align-btn">
                          <Button className="project-button">See our projects</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
    </section>
    
  )
}


export default TeamSection
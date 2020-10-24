import React from 'react';
import teamImage from '../../../../Assets/Images/teamImage.png';
import '../../HomeLeftSection.css';
import '../../sections/Hero/HeroSection.css'; 

import { Container,Row,Col,Button,Image} from 'react-bootstrap';

function EventSection() {
  return (
    <section className="global-section">
    {/* <Container>
      
      <div className="section">
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
    </Container> */}

<Container className="text-center re-order">
                <Row>
                    <Col lg={6} md={12} sm={12} className="first">
                        <h1 className="desktop-header"><h1 className="section-heading" style={{color: "#3366ff"}}>Events</h1></h1>
                        <p className="team-para">We are a group of designers, developers, managers and writers who come around the table to bring a change. We love to innovate, ideate and build technical solutions to common day to day life problems. We also organise webinars and workshops to inculcate a culture of technology.
                        </p>
                        <div className="align-btn">
                          <Button className="events-button">See our events</Button>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="Second">
                    <h1 className="mobile-tab-header"><h1 className="section-heading" style={{color: "#3366ff"}}>Events</h1></h1>
                        <Image className="img-fluid hero-image" src={teamImage}></Image>
                    </Col>
                </Row>
            </Container>
    </section>
  )
}


export default EventSection
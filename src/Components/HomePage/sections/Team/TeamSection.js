import React from 'react';
import teamImage from '../../../../Assets/Images/team-model.png';
import '../../HomeLeftSection.css';
import '../../sections/Hero/HeroSection.css'; 
import { Container,Row,Col,Button,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TeamSection() {
  return (
    <section className="team-section">


    <Container className="re-order">
                <Row>
                    <Col lg={6} md={12} sm={12} className="first">
                        <h1 className="desktop-header"><h1 className="section-heading">Who are <span style={{ color: "#008000" }}>we</span></h1></h1>
                        
                        <p className="team-para">We are a cluster of students who are ardent about helping their peers learn, connect and grow .
                         We had an amazing journey coming to where we are today and things came to existence because of our ability to 
                         work together towards a common vision as a team. 
                         DSC BVP pune,  provides students a vivacious and jovial environment to connect,collaborate and unfurl their skills.
                        </p>
                        {/* <Link to='/team'>
                        <div className="align-btn">
                          <Button className="team-button">Meet the team</Button>
                        </div>
                        </Link> */}
                       
                        
                    </Col>
                    <h1 className="mobile-tab-header"><h1 className="section-heading">Who are <span style={{ color: "#008000" }}>we</span></h1></h1>
                    <Col lg={6} md={12} sm={12} className="second">
                        <Image className="img-fluid hero-image" src={teamImage}></Image>
                    </Col>
                </Row>
            </Container>
    </section>
  )
}


export default TeamSection
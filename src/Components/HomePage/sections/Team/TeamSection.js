import React from 'react';
import teamImage from '../../../../Assets/Images/teamImage.png';
import '../../HomeLeftSection.css';
import '../../sections/Hero/HeroSection.css'; 
import { Container,Row,Col,Button,Image} from 'react-bootstrap';


function TeamSection() {
  return (
    <section className="global-section">
    {/* <Container>
      <div className="section">
        <div className="row ">

          <div className="col-12 ">
            <h1 className="section-heading">Who are <span style={{ color: "#008000" }}>we</span></h1>
          </div>

          <div className="col-md-5  order-12 order-md-1 text-aligning">

            <p className="section-description">We are a group of designers, developers, managers
            and writers who come around the table to bring
            a change. We love to innovate, ideate and
            build technical solutions to common day to day
            life problems. We also organise webinars and
            workshops to inculcate a culture of technology.
          </p>
            
              <div className="section-button " style={{backgroundColor: "#008000"}}>Meet the team</div>
            
          </div>


          <div className="col-md-5 order-1 order-md-12 text-aligning">
            <img className="section-image" src={teamImage} alt="TEAM IMAGE"></img>
          </div>

        </div>
      </div>
    </Container> */}

    <Container className="re-order">
                <Row>
                    <Col lg={6} md={12} sm={12} className="first">
                        <h1 className="desktop-header"><h1 className="section-heading">Who are <span style={{ color: "#008000" }}>we</span></h1></h1>
                        
                        <p className="team-para">We are a group of designers, developers, managers
                          and writers who come around the table to bring
                          a change. We love to innovate, ideate and
                          build technical solutions to common day to day
                          life problems. We also organise webinars and
                          workshops to inculcate a culture of technology.
                        </p>
                        <div className="align-btn">
                          <Button className="team-button">Meet the team</Button>
                        </div>
                        
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
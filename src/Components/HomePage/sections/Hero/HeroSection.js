import React from 'react';
import './HeroSection.css';
import '../../HomeLeftSection.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { Link  } from "react-router-dom";
import heroImage from '../../../../Assets/Images/hero-model.webp';

function Home() {
    return (
        <section className="home-section">
            <div className="laptop-viewport">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="text-left" >
                            <h1 className="home-header">Hello, <font className="there-style">There!</font></h1>
                            <h2 className="home-subheader">We are DSC BVP Pune</h2>
                            <p className="home-para">We are a  community  of designers, developers, managers
                            and writers who throw in together to bring
                            in a  reformation. We love to innovate, ideate and
                            build technical solutions to the everyday
                            life problems. To inculcate the culture of technology,we organise various
                            workshops and webinars. At DSC we work with a zeal to bring the best from the best. </p>
                            {/* <Link to="/OdeToCode">
                            <Button className="cta-button">Ode To Code</Button>
                            </Link> */}
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Image className="img-fluid hero-image" src={heroImage} ></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mobile-viewport">
                <Container>
                    <br /><br />
                    <Row>
                        <Col lg={6} md={12} sm={12} className="text-center" >
                            <h1 className="home-header text-center">Hello, <font className="there-style">There!</font></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <center>
                                <Image className="img-fluid hero-image" src={heroImage} ></Image>
                            </center>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <h2 className="home-subheader text-center">We are DSC BVP Pune</h2>
                            <p className="home-para">
                                <center>
                                    We are a  community  of designers, developers, managers and writers
                            who throw in together to bring in a  reformation. We love to innovate, ideate and build
                            technical solutions to the everyday life problems. To inculcate the culture of technology,
                            we organise various workshops and webinars. At DSC we work with a zeal to bring the
                            best from the best.
                                </center>
                            </p>
                            {/* <Link to="/OdeToCode">
                            <Button className="cta-button">Ode To Code</Button>
                            </Link> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Home;
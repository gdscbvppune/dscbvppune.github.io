import React from 'react';
import contactImage from '../../../../Assets/Images/contact-model.png';
import './ContactSection.css';
import '../../HomeRightSection.css';

import { Container,Row,Col,Button,Image} from 'react-bootstrap';

function ContactSection() {
    return (
        <section className="contact-section">
                <Container className="re-order">
                                <Row>
                                    
                                    <Col lg={6} md={12} sm={12} className="second">
                                    <h1 className="mobile-tab-header"><h1 className="Contact-header section-heading">Contact <span style={{ color: "#F9BB08" }}>Us</span></h1></h1>
                                        <Image className="img-fluid hero-image" src={contactImage}></Image>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} className="first">
                                        <h1 className="desktop-header"><h1 className="Contact-header section-heading">Contact <span style={{ color: "#F9BB08" }}>Us</span></h1></h1>
                                        <p className="Contact-para">Feel free to reach out to us using any of <br></br>the social
                                        media networks.
                                        </p>

                                        <div className="social mt-4">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                            <a href="#"><i class="fab fa-linkedin"></i></a>
                                        </div>
                                       
                                    </Col>
                                </Row>
            </Container>
    </section>
    )
}


export default ContactSection


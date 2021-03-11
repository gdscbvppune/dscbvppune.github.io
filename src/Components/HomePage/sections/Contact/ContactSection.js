import React from 'react';
import contactImage from '../../../../Assets/Images/contact-model.webp';
import './ContactSection.css';
import '../../HomeRightSection.css';

import { Container, Row, Col, Image } from 'react-bootstrap';

function ContactSection() {
    return (
        <section className="contact-section">
            <Container className="re-order">
                <Row>

                    <Col lg={6} md={12} sm={12} className="second">
                        <h1 className="mobile-tab-header Contact-header section-heading">Contact <span style={{ color: "#F9BB08" }}>Us</span></h1>
                        <Image className="img-fluid hero-image" src={contactImage}></Image>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="first">
                        <h1 className="desktop-header Contact-header section-heading">Contact <span style={{ color: "#F9BB08" }}>Us</span></h1>
                        <p className="Contact-para">Feel free to reach out to us using any of <br></br>the social
                            media networks.
                            </p>

                        <div className="social mt-8">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dsc.pune"><i className="fab fa-facebook-f"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dscbvppune"><i className="fab fa-instagram"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/developer-student-clubs-bvp-pune/"><i className="fab fa-linkedin"></i></a>
                        </div>

                    </Col>
                </Row>
                <br /><br />
            </Container>
        </section>
    )
}


export default ContactSection


import React from "react";
import "./Header.css"
import logoPng from '../../../../Assets/Images/dsc-logo.png';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="my-row">
                    <Col md lg xs xl={1}>
                        <Image src={logoPng} className="App-logo" alt="logo" />
                    </Col>
                    <Col className="my-column-2" md lg xs xl={11}>
                        <h1 className="home-head">Developer Student Clubs</h1>
                        <h2 className="home-subhead">
                            Bharati Vidyapeeth Deemed University College of Engineering Pune
                        </h2>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;
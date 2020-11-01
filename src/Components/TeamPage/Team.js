import React from 'react';
import Header from './sections/Header/Header.js';
import OurTeam from './sections/OurTeam/OurTeam.js';
import Members from './sections/Members/Members.js';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Team() {
    return (
        <Col>
            <Header/>
            <OurTeam/>
            <Members/>
        </Col>

    )
}

export default Team
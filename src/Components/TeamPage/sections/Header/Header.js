import React from "react";
import "./Header.css"
import logoPng from '../../../../Assets/Images/logoPng.png';
import { Container,Row,Col,Button,Image} from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <div className="head">
                    <Row className="row">
                        <img src={logoPng}  className="App-logo" alt="logo" />

                        <Col className="column">
                         <h1 className="home-header">Developer Student Clubs</h1>
                        <h2 className="home-subheader">
                        Bharati Vidyapeeth Deemed University College of Engineering Pune
                        </h2>
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default Header;
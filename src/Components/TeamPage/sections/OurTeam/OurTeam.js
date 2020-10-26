import React from "react";
import "./OurTeam.css"
import { Container,Row,Col,Button,Image} from 'react-bootstrap';

class OurTeam extends React.Component{
    render(){
        return(
            <Container className="container">
                <Col className="text-left">
                  <h1 className="home">Our <font className="there-text-style">Team</font></h1>                        
                  <h1 className="sub"> “Talent wins games, but teamwork and intelligence win championships”</h1>                        
                </Col>
            </Container>
        );
    }
}

export default OurTeam;
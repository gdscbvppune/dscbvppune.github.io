import React from "react";
import "./OurTeam.css"
import { Container,Row,Col,Button,Image} from 'react-bootstrap';

class OurTeam extends React.Component{
    render(){
        return(
            <div className="container">
                <Col className="text-left">
                  <h1 className="home">Our <font className="there-style">Team</font></h1>                        
                  <h1 className="sub"> “Talent wins games, but teamwork and intelligence win championships.</h1>                        
                </Col>
            </div>
        );
    }
}

export default OurTeam;
import React from "react";
import "./OurTeam.css"
import { Container,Col} from 'react-bootstrap';

class OurTeam extends React.Component{
    render(){
        return(
            <Container className="our-team">
                <Col>
                  <h1 className="team-heading">Our <font className="there-text-style">Team</font></h1>                        
                  <h1 className="team-subheading"> “Talent wins games, but teamwork and intelligence win championships”</h1>                        
                </Col>
                
            </Container>
            
        );
    }
}

export default OurTeam;
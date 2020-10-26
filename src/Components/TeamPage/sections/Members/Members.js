import React from "react";
import "./Members.css"
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import MemberTile from '../MemberTile/MemberTile.js'
var website = require('../../../../Assets/data/website.json');

class Members extends React.Component {
    render() {
        var rows = [];
        var uid;
        var i=0;
        var tiles=[];
        var teamData = website.teams;
        for(uid in teamData){
            var userData = teamData[uid];
                tiles.push(addTiles(i,userData));
                if(  (i+1)%5==0)
                {
                    rows.push(<Row className="member-tile-container-row">{tiles}</Row>);
                    tiles=[];
                }          
                i=i+1;
        }
        return (
            <Container className="members-container">
                    {rows}
            </Container>

        );
        
    }
}

function addTiles(i, userData){
    return <MemberTile pad={i} data={userData} />
}


export default Members;


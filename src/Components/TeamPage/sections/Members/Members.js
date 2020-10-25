import React from "react";
import "./Members.css"
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import MemberTile from '../MemberTile/MemberTile.js'
// import {data} from '../../../../Assets/data/website.json';
var website = require('../../../../Assets/data/website.json');
// import { Row } from "react-bootstrap";


class Members extends React.Component {
    render() {
        var rows = [];
        // for (var i = 0; i < 25; i++) {
        //     rows.push(<div><MemberTile pad={i} /></div>);
        // }
        var uid;
        var i=0;
        var teamData = website.teams;
        for(uid in teamData){
            i = rows.length;
            var userData = teamData[uid];
             rows.push(<div><MemberTile pad={i} data={userData} /></div>);
        }
        return (
            <div className="members-container">
                {/* <Col className='members-column'> */}
                    {rows}
                {/* </Col> */}
            </div>

        );
    }
}


export default Members;

{/* <Gallery images={IMAGES} rowHeight="100" enableImageSelection="false" />, */ }

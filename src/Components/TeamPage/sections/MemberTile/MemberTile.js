import React from "react";
import "./MemberTile.css"
import facebook from '../../../../Assets/Images/facebook.png';
import instagram from '../../../../Assets/Images/instagram.png';
import linkedin from '../../../../Assets/Images/linkedin.png';
import { Image, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class MemberTile extends React.Component {

    render() {
        const pad = this.props.pad;
        return (
            <Col md lg xs xl={2.5} style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center"
            }} className="member-tile-column">
                <Image src={this.props.data.profileImage} roundedCircle className="profileImage" />
                <h1 className="member-name">{this.props.data.name}</h1>
                <h1 className="member-domain">{this.props.data.title}</h1>
                <Row style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} className='social-media-row'>
                    <Col>
                        <img src={facebook} className="social-media" alt="logo" href="https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react" />
                    </Col>
                    <Col>
                        <img src={instagram} className="social-media" alt="logo" />
                    </Col>
                    <Col>
                        <img src={linkedin} className="social-media" alt="logo" />
                    </Col>
                    {/* <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'http://google.com';
                        }}
                    > Click here</button> */}
                </Row>
            </Col>
        );
    }

}


export default MemberTile;
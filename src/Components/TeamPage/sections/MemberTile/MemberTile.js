import React from "react";
import "./MemberTile.css"
import facebook from '../../../../Assets/Images/facebook.png';
import instagram from '../../../../Assets/Images/instagram.png';
import linkedin from '../../../../Assets/Images/linkedin.png';

import { Image , Row} from 'react-bootstrap';

class MemberTile extends React.Component {

    render() {
        const pad = this.props.pad;
        const styles = {
            position: 'absolute',
            left: ((pad) % 5) * 300,
            top: Math.floor(pad / 5) * 400 + 50,
        };
        return (
            <div style={styles} className='member-tile-container'>
                <Image src={this.props.data.profileImage} roundedCircle className="profileImage" />
                <h1 className="member-name">{this.props.data.name}</h1>
                <h1 className="member-domain">{this.props.data.title}</h1>
                <Row className = 'social-media-row'>
                <img src={facebook} className="social-media" alt="logo" />
                <img src={instagram} className="social-media" alt="logo" />
                <img src={linkedin} className="social-media" alt="logo" />
                </Row>
            </div>
        );
    }

}


export default MemberTile;
import React from "react";
import "./Header.css"
// import logo from '../../../../Assets/Images/logo.svg';
// import gem from '../../../../Assets/Images/gem.svg';
import logoPng from '../../../../Assets/Images/logoPng.png';


import { Container,Row,Col,Button,Image} from 'react-bootstrap';
import teamImage from '../../../../Assets/Images/teamImage.png';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="container">
                    <Row>
                        <img src={logoPng}  className="App-logo" alt="logo" />

                        {/* <div className="col-md-12 text-center"> */}
                        <Col>
                        <div>
                        Developer Student Clubs
                        </div>
                        <div>
                        Bharati Vidyapeeth Deemed University College of Engineering
                        </div>
                        </Col>
                        {/* </div> */}
                    </Row>
                </div>
            </div>




        //     <section className="home-section">
        //     <Container>
        //         <Row>
        //             <Col lg={6} md={12} sm={12} className="text-left">
        //                 <h1 className="home-header">Hello, <font className="there-style">There!</font></h1>
        //                 <h2 className="home-subheader">We are DSC BVP Pune</h2>
        //                 <p className="home-para">Developer Students Club BVP is a community of budding 
        //                 developers, programmers and designers, where the 
        //                 students follow and learn from fellow developers.</p>
                        
        //                 <Button className="cta-button">Hack BVP</Button>
        //             </Col>
        //             <Col lg={6} md={12} sm={12}>
        //                 {/* <Image className="img-fluid" src={logo}></Image> */}
        //                 <img src={gem}  className="App-logo" alt="logo" />
        //             </Col>
        //         </Row>
        //     </Container>
        // </section>
        );
    }
}

export default Header;
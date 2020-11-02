import React from 'react';
import OtcLofo from '../../../../Assets/Images/OTC.png';
import './LandingSection.css';

function LandingSection() {
    return (
        <div className="landing-section">


            <div className="logo-section ">
                <img src={OtcLofo} alt="ODE_TO_CODE_LOGO" className="hackathon-logo"></img>
            </div>
            <section className=" container-fluid button-section">
                <div className="devfolio-btn">
                    Register With Devfolio
                </div>
            </section>


        </div>






    )
}


export default LandingSection;




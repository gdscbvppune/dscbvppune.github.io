import React from 'react';
import './HackSponsors.css';
import Devfolio_Logo from '../../../../Assets/Images/OdeToCode/Devfolio_Logo.png';
import Fold_Logo from '../../../../Assets/Images/OdeToCode/Fold_Logo.png';
import Matic_Logo from '../../../../Assets/Images/OdeToCode/Matic_Logo.png';
import Portis_Logo from '../../../../Assets/Images/OdeToCode/Portis_Logo.png';
import Tezos_Logo from '../../../../Assets/Images/OdeToCode/Tezos_Logo.png';


function HackSponsors() {
    return (
        <div className="hack-team-section">
            <h1>
                Diamond Sponsor
          </h1>
            <div className="row">
                <div className="col-12 text-center">
                    <img src={Devfolio_Logo} alt="DEVFOLIO" className="devfolio-sponsors-logo" ></img>
                </div>
            </div>
            <br>
            </br>
            <br>
            </br>
            <h1>
                Platinum Sponsor
          </h1>
            <div className="row">
                <div className="col-6 text-center">
                    <img src={Fold_Logo} alt="DEVFOLIO" className="sponsors-logo" ></img>
                </div>
                <div className="col-6 text-center">
                    <img src={Matic_Logo} alt="DEVFOLIO" className="sponsors-logo" ></img>
                </div>
            </div>
            <div className="row">
                <div className="col-6 text-center">
                    <img src={Portis_Logo} alt="DEVFOLIO" className="sponsors-logo" ></img>
                </div>
                <div className="col-6 text-center">
                    <img src={Tezos_Logo} alt="DEVFOLIO" className="sponsors-logo" ></img>
                </div>
            </div>
        </div>
    )

}

export default HackSponsors;
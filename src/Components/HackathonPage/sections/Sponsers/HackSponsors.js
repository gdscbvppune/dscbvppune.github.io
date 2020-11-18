import React from 'react';
import './HackSponsors.css';
import Devfolio_Logo from '../../../../Assets/Images/OdeToCode/Devfolio_Logo.png';
import Fold_Logo from '../../../../Assets/Images/OdeToCode/Fold_Logo.png';
import Matic_Logo from '../../../../Assets/Images/OdeToCode/Matic_Logo.png';
import Portis_Logo from '../../../../Assets/Images/OdeToCode/Portis_Logo.png';
import Tezos_Logo from '../../../../Assets/Images/OdeToCode/Tezos_Logo.png';
import interwebs_Logo from '../../../../Assets/Images/OdeToCode/interwebs.host-sponsor.png';
import echoAR_Logo from '../../../../Assets/Images/OdeToCode/echoAR-sponsor.png';
import replit_Logo from '../../../../Assets/Images/OdeToCode/replit-sponsor.png';
import jetbrains_Logo from '../../../../Assets/Images/OdeToCode/jetbrains-sponsor.png';
import linode_Logo from '../../../../Assets/Images/OdeToCode/linode-sponsor.png';
import codeAsylums_Logo from '../../../../Assets/Images/OdeToCode/code-asylyms-comm.png';
import commudle_Logo from '../../../../Assets/Images/OdeToCode/commudle-logo-comm.png';
import GMC_Logo from '../../../../Assets/Images/OdeToCode/GMC_logo-comm.png';
import merge_Logo from '../../../../Assets/Images/OdeToCode/merge-comm.png';

function HackSponsors() {
    return (
        <div className="hack-team-section">
            <h1>
                Diamond Sponsor
          </h1>
            <div className="row">
                <div className="col-12 text-center">
                    <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer" >
                        <img src={Devfolio_Logo} alt="DEVFOLIO" className="devfolio-sponsors-logo" ></img>
                    </a>

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
                    <a href="http://fold.money/" target="_blank" rel="noopener noreferrer" >
                        <img src={Fold_Logo} alt="Fold-logo" className="sponsors-logo" ></img>
                    </a>
                </div>
                <div className="col-6 text-center">
                    <a href="https://matic.network/" target="_blank" rel="noopener noreferrer" >
                        <img src={Matic_Logo} alt="Matic-logo" className="sponsors-logo" ></img>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-6 text-center">
                    <a href="https://portis.io/" target="_blank" rel="noopener noreferrer" >
                        <img src={Portis_Logo} alt="Portis-logo" className="sponsors-logo" ></img>
                    </a>
                </div>
                <div className="col-6 text-center">
                    <a href="https://tezos.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={Tezos_Logo} alt="Tezos-logo" className="sponsors-logo" ></img>
                    </a>
                </div>
            </div>
            <h1>
                Gold Sponsor
          </h1>
            <div className="row">
                <div className="col-6 text-center">
                    <a href="http://interwebs.host/" target="_blank" rel="noopener noreferrer" >
                        <img src={interwebs_Logo} alt="interwebs_logo" className="sponsors-logo" style={{ background: "white" }} ></img>
                    </a>
                </div>
                <div className="col-6 text-center">
                    <a href="https://www.echoar.xyz/" target="_blank" rel="noopener noreferrer" >
                        <img src={echoAR_Logo} alt="echoAR_Logo" className="sponsors-logo" ></img>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-6 text-center">
                    <a href="https://repl.it/" target="_blank" rel="noopener noreferrer" >
                        <img src={replit_Logo} alt="replit_Logo" className="sponsors-logo" ></img>
                    </a>
                </div>
                <div className="col-6 text-center">
                    <a href="https://jetbrains.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={jetbrains_Logo} alt="jetbrains_Logo" className="sponsors-logo"  ></img>
                    </a>
                </div>

            </div>
            <div className="row">
                <div className="col-6 text-center">
                    <a href="https://linode.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={linode_Logo} alt="linode" className="sponsors-logo" ></img>
                    </a>
                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>

            <div className="row">
                <div className="col-6 text-center">
                    <h3>
                        Community Partner
          </h3>
                  
                        <img src={codeAsylums_Logo} alt="codeAsylums_Logo" className="sponsors-logo" ></img>
                   
                </div>
                <div className="col-6 text-center">
                    <h3>
                        Platform partner
          </h3>
                    
                        <img src={commudle_Logo} alt="commudle_Logo" className="sponsors-logo"  ></img>
                   
                </div>

            </div>
            <div className="row">
                <div className="col-6 text-center">
                    <h3>
                       Certification partner
          </h3>
                   
                        <img src={GMC_Logo} alt="GMC_Logo" className="sponsors-logo" ></img>
                
                </div>
                <div className="col-6 text-center">
                    <h3>
                    Internship partner
          </h3>
                    
                        <img src={merge_Logo} alt="merge_Logo " className="sponsors-logo"  ></img>
                   
                </div>

            </div>
        </div>
    )

}

export default HackSponsors;
import React from "react";
import "./Footer.css"

class FooterSection extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            Made with <span style={{color:"#db332e", fontSize:"20px"}}>&hearts;</span> by Developer Student Clubs Bharati Vidyapeeth Deemed University College of Engineering Pune
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterSection;
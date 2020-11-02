import React from 'react';
import './FaqSection.css';

function FaqSection() {


    return (
        <div className="faq-hack-section">
            <div className="hack-faqs">
                <div id="accordion">
                    <div className="card">
                        
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                            <div className="card-header">
                                What does it cost?
                                </div>
                            </a>

                      
                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                                0 bucks!! Yes, it is absolutely chargeless.

                  </div>
                        </div>
                    </div>
                    <div className="card">

                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                            <div className="card-header">
                                How big a team can be?
                                </div>
                        </a>

                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                The team should comprise of maximum 3 members.
                         </div>
                        </div>
                    </div>
                    <div className="card">
                       
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                            <div className="card-header">
                                Where can I find updates?
                                </div>
                    </a>
                       
                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                Please join our Discord server for updates.
                         </div>
                        </div>
                    </div>
                    <div className="card">
                        
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                            <div className="card-header">
                                What if I don’t know how to code?
                                </div>
                             </a>
                       
                        <div id="collapseFour" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                Well you can always learn! Ode to Code is for anyone and everyone,
                                we’ll have the best of coders, speakers, mentors and resources available for you to
                                build your first hack, be it a hello world website or your own cryptocurrency wallet app,
                                Ode to Code is the perfect place for you to start.
                         </div>
                        </div>
                    </div>
                    <div className="card">
                       
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                            <div className="card-header">
                                How does judging work?
                                </div>
                    </a>
                      
                        <div id="collapseFive" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                An esteemed panel of judges with different domains of work experience will be present to
                                review the projects and the best projects will be selected based on whether they pertain to
                                our tracks. The final and binding call will be made by judges.
                         </div>
                        </div>
                    </div>
                    <div className="card">
                        
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseSix">
                            <div className="card-header">
                                What if I need help to build my project?
                                </div>
                    </a>
                        
                        <div id="collapseSix" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                We will provide you with the best of coders and mentors, experienced in various fields and
                                domains to help you in every step 24/7. An esteemed panel of judges  will also be there for
                                you to consult.
                         </div>
                        </div>
                    </div>
                    <div className="card">
                       
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseSeven">
                            <div className="card-header">
                                How long will the event be for?
                                </div>
                    </a>
                       
                        <div id="collapseSeven" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                The event would last for 36 hours, so buckle up cause it's gonna be a fun ride!
                         </div>
                        </div>
                    </div>
                    <div className="card">
                       
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseEight">
                            <div className="card-header">
                                How to submit a project?
                                </div>
                    </a>
                      
                        <div id="collapseEight" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                Using DevFolio and Github
                         </div>
                        </div>
                    </div>
                    <div className="card">
                        
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseNine">
                            <div className="card-header">
                                Is there a code of conduct?
                                </div>
                    </a>
                       
                        <div id="collapseNine" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                                We take organising and hosting hackathons to have a mutually safe space for everyone
                                very seriously. Please read the code of conduct here.
                         </div>
                        </div>
                    </div>


                </div>
                <h1>
                    Contact Us
          </h1>
                <p>

                    If you have any doubts regarding the updates, the code of conduct, or anything concerning
                    Ode to Code, feel free to reach out to us through emails and social media profiles.
          </p>


            </div>



        </div>
    )
}


export default FaqSection;
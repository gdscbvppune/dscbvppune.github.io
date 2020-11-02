import React from 'react';
import './FaqSection.css';

function FaqSection() {


    return (
        <div className="faq-hack-section">
            <div className="hack-faqs">
                <div id="accordion">
                    <div class="card">
                        <div class="card-header">
                            <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                What does it cost?
                            </a>
                 
                        </div>
                        <div id="collapseOne" class="collapse show" data-parent="#accordion">
                            <div class="card-body">
                                0 bucks!! Yes, it is absolutely chargeless.

                  </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                How big a team can be?
                      </a>
                        </div>
                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                The team should include exactly 3 members.
                         </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                Where can I find updates?
                    </a>
                        </div>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                            Please join our Discord server for updates, yada yada yada
                         </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                            What if I don’t know how to code?
                             </a>
                        </div>
                        <div id="collapseFour" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                            Well you can always learn! Ode to Code is for anyone and everyone,
                             we’ll have the best of coders, speakers, mentors and resources available for you to 
                             build your first hack, be it a hello world website or your own cryptocurrency wallet app,
                              Ode to Code is the perfect place for you to start.
                         </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                            How does judging work?
                    </a>
                        </div>
                        <div id="collapseFive" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                            An esteemed panel of judges with different domains of work experience will be present to 
                            review the projects and the best projects will be selected based on whether they pertain to 
                            our tracks. The final and binding call will be made by judges.
                         </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseSix">
                            What if I need help to build my project?
                    </a>
                        </div>
                        <div id="collapseSix" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                            We will provide you with the best of coders and mentors, experienced in various fields and
                             domains to help you in every step 24/7. An esteemed panel of judges  will also be there for
                              you to consult.
                         </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseSeven">
                            How long will the event be for?
                    </a>
                        </div>
                        <div id="collapseSeven" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                            The event would last for 36 hours, so buckle up cause it's gonna be a fun ride!
                         </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseEight">
                            How to submit a project?
                    </a>
                        </div>
                        <div id="collapseEight" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                            Using DevFolio and Github
                         </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseNine">
                            Is there a code of conduct?
                    </a>
                        </div>
                        <div id="collapseNine" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                            We take organising and hosting hackathons to have a mutually safe space for everyone 
                            very seriously. Please read the code of conduct here.
                         </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}


export default FaqSection;
import React, {useEffect} from 'react';
import Header from '../HomePage/sections/Header/HeaderSection';
import Footer from '../HomePage/sections/Footer/FooterSection';
import OurTeam from './sections/OurTeam/OurTeam.js';
import Members from './sections/Members/Members.js';

function Team() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header/> 
            <OurTeam/>
            <Members/>
            <Footer />
        </div>
    )
}

export default Team
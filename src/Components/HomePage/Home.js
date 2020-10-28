import React from 'react';
import HeaderSection from './sections/Header/HeaderSection';
import HeroSection from './sections/Hero/HeroSection';
import TeamSection from './sections/Team/TeamSection';
import ProjectSection from './sections/Project/ProjectSection';
import EventSection from './sections/Event/EventSection';
import ContactSection from './sections/Contact/ContactSection';
import FooterSection from './sections/Footer/FooterSection';
import './HomeLeftSection.css';

function Home() {
    return (
        <div className="global-class">
            <HeaderSection />
            <HeroSection />
            <TeamSection />
            <ProjectSection />
            <EventSection />
            <ContactSection />
            <FooterSection />
        </div>

    )
}

export default Home
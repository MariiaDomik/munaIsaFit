import React from 'react'
import AboutSection from '../components/AboutSection';
import StaticDataManager from '../utils/StaticDataManager';
import '../css/About.css';

function About() {
  const staticDataManager = new StaticDataManager();
  const aboutData = staticDataManager.getAboutData();

  return (
    <section>
       <AboutSection {...aboutData} className='about-page' />
    </section>
  )
}

export default About
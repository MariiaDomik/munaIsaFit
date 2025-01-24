import React from 'react'
import AboutSection from '../components/AboutSection';
import StaticDataManager from '../utils/StaticDataManager';
import '../css/About.css';
import { Link } from 'react-router-dom';

function About() {
  const staticDataManager = new StaticDataManager();
  const aboutData = staticDataManager.getAboutData();

  return (
    <section>
       <div className='about-section' id='about'>
        <div className='about'>
        <h2>{aboutData.title}</h2>
        
            <p>{aboutData.text}</p>
        </div>
        
        <div className='img' style={{backgroundImage: `url(${aboutData.img})`}}></div>
        <Link className='button' to={`/contact`}><span className=''>Contact Uns</span></Link>
    </div>
    </section>
  )
}

export default About
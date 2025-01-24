import React from 'react'
import { Link } from 'react-router-dom';

function AboutSection(props) {
    const { title, img, text, page } = props;
  return (
    <div className='about-section' id='about'>
        <div className='about'>
        <h2>{title}</h2>
        
            <p className='p-home'>{text}</p>
        </div>
        
        <div className='img' style={{backgroundImage: `url(${img})`}}></div>
        <div className='line'><Link className='card-link' to={`/about`}><span className=''>Mehr erfahren</span></Link></div>
    </div>
  )
}

export default AboutSection
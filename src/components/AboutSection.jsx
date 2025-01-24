import React from 'react'

function AboutSection(props) {
    const { title, img, text, page } = props;
  return (
    <div className='about-section' id='about'>
        <div className='about'>
        <h2>{title}</h2>
        
            <p>{text}</p>
        </div>
        
        <div className='img' style={{backgroundImage: `url(${img})`}}></div>
    </div>
  )
}

export default AboutSection
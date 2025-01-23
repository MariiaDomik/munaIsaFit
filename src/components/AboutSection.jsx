import React from 'react'

function AboutSection(props) {
    const { title, img, text } = props;
  return (
    <section className='about-section' id='about'>
        <div className='about'>
        <h1>{title}</h1>
        
            <p>{text}</p>
        </div>
        
        <div className='img' style={{backgroundImage: `url(${img})`}}></div>
    </section>
  )
}

export default AboutSection
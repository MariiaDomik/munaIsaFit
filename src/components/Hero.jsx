import React from 'react'
import '../css/Hero.css'
import { Link } from 'react-router-dom';

function Hero(props) {
  const { title, p, buttonCourses, buttonContact, img } = props;
  return (
    <div className='hero-container'>
      
      <img className='hero-img hero-text-right-img' src={img}/>
       <div className='hero-text'>
        {/* <h1>{title}</h1> */}
        <h1>Vibes. <span>Individuell.</span> Power.</h1>
        <p>{p}</p>
        <div className='buttons'>
          <div className='button-container'>
          
            <Link className='button' to='/courses'>{buttonCourses.text}</Link>
            </div>
            <div className='button-container'>
            <Link className='button' to='/contact'>{buttonContact.text}</Link>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Hero
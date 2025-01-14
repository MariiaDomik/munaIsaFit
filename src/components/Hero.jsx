import React from 'react'

function Hero(props) {
  const { title, p, buttonKurses, buttonContact, img } = props;
  return (
    <div className='hero'>
       <div className='hero-text'>
        <h1>{title}</h1>
        <p>{p}</p>
        <div className='buttons'>
            <button>Unsere Kursplan</button>
            <button>Contact Us</button>
        </div>
       </div>
       <div className='hero-img'></div>
    </div>
  )
}

export default Hero
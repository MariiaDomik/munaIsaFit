import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../css/Navigation.css'
import MenuItems from './MenuItems';

function Navigation(props) {
  const { logo, navLinks, button } = props;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <img src={logo} alt='logo'/> 
      <button className='burger-button ' onClick={handleToggle}></button>
      <div className='nav-mobile'>
         { navbarOpen && (
          <div className='nav-mobile-menu'>
            <button className='close-mobile-menu-button' onClick={handleToggle}></button>
          <MenuItems navLinks={navLinks} button={button} onClick={handleToggle}/>
          </div>
         ) }
      </div>
      <div className='nav-desktop'>
        <MenuItems navLinks={navLinks} button={button} onClick={{}}/>
        {/* <Link className='button' to={button.link}>{button.text}</Link> */}
        </div>
    </nav>
  )
}

export default Navigation
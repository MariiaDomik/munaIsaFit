import React from 'react'
import { Link } from 'react-router-dom';

function Navigation(props) {
  const { logo, navLinks, button } = props;
  return (
    <nav>
        <img src={logo} alt='logo'/>
        <ul>{navLinks.map( link => {
             return <li key={link.id}><Link to={link.href}>{link.text}</Link> </li>;
        }
        )}
        </ul>
        <Link className='link-button' to={button.link}>{button.text}</Link>
    </nav>
  )
}

export default Navigation
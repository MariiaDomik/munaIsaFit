import React from 'react' 
import { Link } from 'react-router-dom';

function MenuItems(props) {
    const { navLinks, button, onClick } = props;
  return (
    <ul>{navLinks.map( link => {
        return <li key={link.id}>
           { link.hash ? 
           <Link to={link.link} onClick={onClick}>{link.text}</Link> :
           <HashLink smooth to={link.link} onClick={onClick}>{link.text}</HashLink>}
           </li>;
   }
   )}
   {button && (<li><Link className='button' to={button.link}>{button.text}</Link>
   </li>)}
   </ul>
  )
}

export default MenuItems
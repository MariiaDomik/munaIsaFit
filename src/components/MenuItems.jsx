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
   {button && (<li  >
    <Link to={button.link} style={{width: '60px', height: '60px', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='button'>
    <div style={{width: '50px', height: '50px', backgroundImage: "url(/email.svg)", borderRadius: '50px' }} onClick={onClick}></div></Link>
   
   </li>)}
   </ul>
  )
}

export default MenuItems
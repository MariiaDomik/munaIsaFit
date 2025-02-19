import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Footer.css'

function Footer(props) {
    const { logo, links, copyrigth, social } = props;
    const basePath = import.meta.env.VITE_BASE_PATH;
  return (
    <footer>
        <img className='logo-footer' src={basePath + logo} alt="" />
            <ul className='footer-links'>
                {links.map((item, i) => (
                    <li key={i}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>
       
            <ul className='footer-social'>
                {social.map((item, i) => (
                    <li key={i} className='li-social'>
                        {item.img && <img className='logo-social' src={basePath + item.img} />}
                        {/* {item.title} */}
                    </li>
                ))}
            </ul>
       
       
       {/* <div id="copyright">
        <p>{copyrigth}</p>
       </div> */}
    </footer>
  )
}

export default Footer
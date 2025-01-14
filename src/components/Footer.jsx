import React from 'react'

function Footer(props) {
    const { logo, description, menu, copyrigth } = props;
  return (
    <footer>
        <div id='footer-menu'>
       <div>
        <img src={logo} alt="" />
        <p>{description}</p>
       </div>
       {
        menu.map((menuItem) => (
            <ul><h2>{menuItem.title}</h2>
                {menuItem.links.map((item, i) => (
                    <li key={i}>
                        {item.img && <img src={item.img} />}
                        {item}
                    </li>
                ))}
            </ul>
        ))
       }
       </div>
       <div id="copyright">
        <p>{copyrigth.text1} <img src={copyrigth.img} alt="" /> {copyrigth.text2}</p>
       </div>
    </footer>
  )
}

export default Footer
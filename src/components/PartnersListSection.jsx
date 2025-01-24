import React from 'react'
import { Link } from 'react-router-dom'

function PartnersListSection(props) {
  const { partners } = props;
  const basePath = import.meta.env.VITE_BASE_PATH;
  return (
    <section>
      <h2>Unsere Partners</h2>
      <div className='partners-container'>
        {partners.map((partner) => (
          <Link to={partner.url} > <div className='partner' key={partner.id} >
            <img src={basePath + partner.logo} alt={partner.title} />
            <p>{partner.title}</p>
            </div>
            </Link>
        ))}
      </div>
    </section>
  )
}

export default PartnersListSection
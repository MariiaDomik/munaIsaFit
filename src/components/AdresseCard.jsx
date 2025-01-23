import React from 'react'

function AdresseCard(props) {
    const { adresse } = props;
  return (
    <div key={adresse.id} className='card adresse-card'>
                    <h3>{adresse.adresse}</h3>
                    { adresse.kommentar && <p>{adresse.kommentar}</p>}
    </div>
  )
}

export default AdresseCard
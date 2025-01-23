import React from 'react'
import AdresseCard from './AdresseCard';
// import MapComponent from './MapComponent';

function AdresseListSection(props) {
    const { locations } = props;
  return (
    <section className='cards-container adresse-section'>
        <h2>Orten</h2>
        <ul>
            { locations.map((adresse) => (
              // <AdresseCard key={adresse.id} adresse={adresse} /> 
              <li key={adresse.id}>{adresse.adresse}</li> 
            ))}
          </ul>  
        
    </section>
  )
}

export default AdresseListSection
import React from 'react'
import MapComponent from '../components/MapComponent'
import useCourseData from '../utils/useCourseData'
import AdresseListSection from '../components/AdresseListSection'

function Locations() {
    const data = useCourseData();
    if (!data) return <div className="loading">Loading...</div>;


  return (
    <section>
        <h1>Orten, wo wir unsere Trainingen führen</h1>
        <MapComponent locations={data.locations} />
        <AdresseListSection locations={data.locations} />
    </section>
  )
}

export default Locations
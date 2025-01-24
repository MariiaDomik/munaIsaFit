import React from 'react'
import MapComponent from '../components/MapComponent'
import useCourseData from '../utils/useCourseData'
import AdresseListSection from '../components/AdresseListSection'

function Locations() {
    const data = useCourseData();
    if (!data) return <div className="loading">Loading...</div>;


  return (
    <section>
        <h2>Dein Fitness in Aubing</h2>
        <p>Wir führen unsere Trainings-programmen in verschiedene Orten in Aubing. </p>
        <MapComponent locations={data.locations} />
        <AdresseListSection locations={data.locations} />
    </section>
  )
}

export default Locations
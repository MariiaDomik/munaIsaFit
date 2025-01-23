import React from 'react'
import Hero from '../components/Hero'
import StaticDataManager from '../utils/StaticDataManager'
import AboutSection from '../components/AboutSection';
import ContentDataManager from '../utils/ContentDataManager';
import AdresseListSection from '../components/AdresseListSection';
import CoursesListSection from '../components/CoursesListSection';
import '../css/Home.css'
import MapComponent from '../components/MapComponent';


function Home() {
  const staticDataManager = new StaticDataManager();
  const heroData = staticDataManager.getHeroData();
  const aboutData = staticDataManager.getAboutData();

  const contentDataManager = new ContentDataManager();
  const locations = contentDataManager.getLocations();
  const courses = contentDataManager.getCourses();

  return (
    <div>
        <Hero {...heroData} />
        <AboutSection {...aboutData} className="about-section" />
        <AdresseListSection locations={locations} />
        <CoursesListSection courses={courses} />
    </div>
  )
}

export default Home
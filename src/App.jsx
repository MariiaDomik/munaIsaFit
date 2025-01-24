import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import StaticDataManager from './utils/StaticDataManager'
import Contact from './pages/Contact'
import Schedule from './pages/Schedule'
import About from './pages/About'
import CourseDetails from './pages/CourseDetails'
import Locations from './pages/Locations'
import { Link } from 'react-router-dom'

function App() {
  const staticDataManager = new StaticDataManager();
    const headerData = staticDataManager.getHeaderData();
    const footerData = staticDataManager.getFooterData();
  
   // Dynamically set basename based on the environment
   const basePath = import.meta.env.VITE_BASE_PATH;
  
  return (
    <Router basename={basePath}>
      <Navigation {...headerData} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Schedule />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/courses/:id' element={<CourseDetails />} />
          <Route path='/contact/anmeldung/:id' element={<Contact />} />
        </Routes>
        </main>
      <Footer {...footerData} />
    </Router>
  )
}

export default App

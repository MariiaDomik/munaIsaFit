import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/kursen' element={<Kursplan />} />
    </Routes>
    <Footer />
    </Router>
  )
}

export default App

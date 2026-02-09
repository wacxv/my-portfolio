import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/home/home.jsx'
import Project from './pages/project/project.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Profile from './pages/profile/profile.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

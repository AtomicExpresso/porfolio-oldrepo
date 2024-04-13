import { useState } from 'react'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/main/navBar.jsx';



function App() {
  return (
  <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

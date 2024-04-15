import { useState } from 'react'
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/main/navBar.jsx';
import Footer from './componets/main/footer.jsx';
import ScrollButton from './componets/Functional/scrollBtn';

//Handles Navbar routes
function App() {
  return (
  <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
        </Routes>
        <ScrollButton/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App

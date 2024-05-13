import React from 'react';
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/main/navBar';
import Footer from './componets/main/footer';
import ScrollButton from './componets/Functional/scrollBtn';
import { Analytics } from "@vercel/analytics/react"

const RootElement = document.getElementById('root')!;
if (!RootElement) {
    throw new Error("Root element '#root' not found in the DOM");
}

//Handles Navbar routes
function App() {
  
    //Darkmode theme, also saves your prefrence to the localStorage
    const [darkMode, setDarkMode] = useState<boolean>(() => {
    const theme = localStorage.getItem('theme') 
    return theme ? JSON.parse(theme) : false})

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode))
  }, [darkMode])

  const darkModeEnabled = () => {
    RootElement.classList.add('dark-mode-enabled')
    RootElement.classList.remove('dark-mode-disabled')
  }

  const darkModeDisabled = () => {
    RootElement.classList.add('dark-mode-diabled')
    RootElement.classList.remove('dark-mode-enabled')
  }

  const changeDarkMode = () => {
    setDarkMode(prevState => !prevState)
  }

  darkMode ? darkModeEnabled() : darkModeDisabled()

  return (
  <Router>
      <div>
        <Analytics/>
        <Navbar darkModeFn={changeDarkMode} stateVar={darkMode}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <ScrollButton/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App

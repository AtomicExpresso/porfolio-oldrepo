import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/main/navBar.jsx';
import Footer from './componets/main/footer.jsx';
import ScrollButton from './componets/Functional/scrollBtn';
import { Analytics } from "@vercel/analytics/react"

//Handles Navbar routes
function App() {
  //Darkmode theme, also saves your prefrence to the localStorage
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('theme')) || false)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode))
  }, [darkMode])

  const darkModeEnabled = () => {
    document.getElementById('root').classList.add('dark-mode-enabled')
    document.getElementById('root').classList.remove('dark-mode-disabled')
  }

  const darkModeDisabled = () => {
    document.getElementById('root').classList.add('dark-mode-diabled')
    document.getElementById('root').classList.remove('dark-mode-enabled')
  }

  darkMode ? darkModeEnabled() : darkModeDisabled()

  return (
  <Router>
      <div>
        <Analytics/>
        <Navbar state={setDarkMode} stateVar={darkMode}/>
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

import { useState } from "react";
import {NavLink, useLocation} from "react-router-dom";
import Logo from '/favicon.webp';
import Bars from '../../assets/images/icons/functionalIcon/bars-solid.svg'

function Navbar() {
  const [openMNav, SetOpenMNav] = useState(false);

  const isMobileNavOpen = () => {
    SetOpenMNav(prevState => !prevState);
  }

  const location = useLocation();
  const activeStyle = {
    color: '#0d6efd', // Active color for nav links
  };

  return (
      <div className="nav-bar">
      <div className="nav-row">
        <img src={Logo} draggable='false' alt="Navigation logo"></img>
        <h1>Felix</h1>
      </div>
      <nav className="non-mobile-nav">
        <ul>
          <li>
            <NavLink to="/" style={location.pathname === "/" ? activeStyle : null}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={location.pathname === "/projects" ? activeStyle : null}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/blog" style={location.pathname === "/blog" ? activeStyle : null}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={location.pathname === "/contact" ? activeStyle : null}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={location.pathname === "/about" ? activeStyle : null}>About</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="mobile-navigation">
        <div className="mobile-nav">
          <img src={Bars} onClick={isMobileNavOpen}></img>
          {openMNav && 
            <div className="mobile-nav-menu">
              <ul>
                <li>
                  <NavLink to="/" style={location.pathname === "/" ? activeStyle : null}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" style={location.pathname === "/projects" ? activeStyle : null}>Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/blog" style={location.pathname === "/blog" ? activeStyle : null}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" style={location.pathname === "/contact" ? activeStyle : null}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/about" style={location.pathname === "/about" ? activeStyle : null}>About</NavLink>
                </li>
              </ul>
            </div>
          }
        </div>
      </nav>
      </div>
    );
}

export default Navbar
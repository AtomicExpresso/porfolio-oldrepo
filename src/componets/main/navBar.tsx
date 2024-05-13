import React from "react";
import { useState } from "react";
import {NavLink, useLocation } from "react-router-dom";
import Logo from '/favicon.webp';
import Bars from '../../assets/images/icons/functionalIcon/bars-solid.svg';
import DarkModeDay from '../../assets/images/functional/darkmode-switch-light.svg';
import DarkModeNight from '../../assets/images/functional/darkmode-switch-dark.svg';
import SunBtn from '../../assets/images/functional/sun-button.svg';
import MoonBtn from '../../assets/images/functional/moon-button.svg';

interface NavbarProps {
  darkModeFn: () => void;
  stateVar: boolean;
}

function Navbar(props: NavbarProps) {
  const [openMNav, SetOpenMNav] = useState(false);

  const isMobileNavOpen = () => {
    SetOpenMNav(prevState => !prevState);
  }

  const location = useLocation();
  const activeStyle: React.CSSProperties = {
    color: '#0d6efd', // Active color for nav links
  };

  return (
      <div className="nav-bar">
      <div className="nav-row">
        <a href="/" className="nav-title"><img src={Logo} draggable='false' alt="Navigation logo"></img></a>
        <a href="/" className="nav-title"><h1>Atomic</h1></a>
      </div>
      <nav className="non-mobile-nav">
        <ul>
          <li>
            <NavLink to="/" style={location.pathname === "/" ? activeStyle : undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={location.pathname === "/projects" ? activeStyle : undefined}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/blog" style={location.pathname === "/blog" ? activeStyle : undefined}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={location.pathname === "/contact" ? activeStyle : undefined}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={location.pathname === "/about" ? activeStyle : undefined}>About</NavLink>
          </li>
          <li>
          <button className="darkmode-toggle" onClick={() => props.darkModeFn()} aria-label="Dark mode toggle">
            {!props.stateVar &&
              <div className="darkmode-toggle--day" style={{backgroundImage: `url(${DarkModeDay})`, backgroundSize: 'cover'}}>
                <img src={SunBtn} alt='Sun icon'></img>
              </div>
            }
            {props.stateVar &&
              <div className="darkmode-toggle--night" style={{backgroundImage: `url(${DarkModeNight})`, backgroundSize: 'cover'}}>
                <img src={MoonBtn} alt='Moon icon'></img>
              </div>
            }
          </button>
          </li>
        </ul>
      </nav>
      <nav className="mobile-navigation">
        <div className="mobile-nav">
          <img src={Bars} onClick={isMobileNavOpen} alt='Mobile navigation menu'></img>
          {openMNav && 
            <div className="mobile-nav-menu">
              <ul>
                <li>
                  <NavLink to="/" style={location.pathname === "/" ? activeStyle : undefined}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" style={location.pathname === "/projects" ? activeStyle : undefined}>Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/blog" style={location.pathname === "/blog" ? activeStyle : undefined}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" style={location.pathname === "/contact" ? activeStyle : undefined}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/about" style={location.pathname === "/about" ? activeStyle : undefined}>About</NavLink>
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
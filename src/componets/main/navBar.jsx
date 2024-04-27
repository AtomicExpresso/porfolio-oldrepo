import { useState } from "react";
import {NavLink, useLocation} from "react-router-dom";
import Logo from '/favicon.webp';
import Bars from '../../assets/images/icons/functionalIcon/bars-solid.svg';
import DarkModeDay from '../../assets/images/functional/darkmode-switch-light.svg';
import DarkModeNight from '../../assets/images/functional/darkmode-switch-dark.svg';
import SunBtn from '../../assets/images/functional/sun-button.svg';
import MoonBtn from '../../assets/images/functional/moon-button.svg';

function Navbar(props) {
  const [openMNav, SetOpenMNav] = useState(false);

  const isMobileNavOpen = () => {
    SetOpenMNav(prevState => !prevState);
  }

  const location = useLocation();
  const activeStyle = {
    color: '#0d6efd', // Active color for nav links
  };

  const toggleDarkMode = () => {
    props.state(prevState => !prevState)
  }

  return (
      <div className="nav-bar">
      <div className="nav-row">
        <img src={Logo} draggable='false' alt="Navigation logo"></img>
        <h1>Atomic</h1>
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
          <li>
          <button className="darkmode-toggle" onClick={toggleDarkMode} aria-label="Dark mode toggle">
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
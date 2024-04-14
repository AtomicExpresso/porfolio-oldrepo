import {NavLink, useLocation} from "react-router-dom";
import Logo from '../../assets/images/logo/logo.svg';


function Navbar() {
  const location = useLocation();

  const activeStyle = {
    color: '#3477e3', // Change to your desired color
  };

    return (
      <div className="nav-bar">
      <div className="nav-row">
        <img src={Logo} draggable='false'></img>
        <h1>Felix</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" style={location.pathname === "/" ? activeStyle : null}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog" style={location.pathname === "/blog" ? activeStyle : null}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={location.pathname === "/contact" ? activeStyle : null}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      </div>
    );
}

export default Navbar
import BootStrapIcon from '../assets/images/icons/bars/bootstrap-bar.svg';
import HtmlIcon from '../assets/images/icons/bars/html-bar.svg';
import CssIcon from '../assets/images/icons/bars/css-bar.svg';
import JavaScriptIcon from '../assets/images/icons/bars/javascript-bar.svg';
import ReactIcon from '../assets/images/icons/bars/react-bar.svg';
import ScssIcon from '../assets/images/icons/bars/scss-bar.svg';
import ViteIcon from '../assets/images/icons/bars/vite-bar.svg';
import WebpackIcon from '../assets/images/icons/bars/webpack-bar.svg';
import ProfileIcon from '../assets/images/icons/decor/user-solid.svg';

function HomeInfo() {
  return (
    <div className="home-info">
      <div className='info-title'>
        <img src={ProfileIcon}></img>
        <h1>About Me</h1>
      </div>
      <hr></hr>
      <p>👋 Hello there! I'm Pumped, a passionate and dedicated full-stack developer with a love for turning innovative ideas into reality through code. I thrive in the dynamic world of web development, constantly seeking new challenges and opportunities to expand my skills.</p>
      <button className="btn btn-primary">Read More</button>
      <div className="icon-list">
        <img src={HtmlIcon} alt="html 5" draggable='false'></img>
        <img src={CssIcon} alt="css 3" draggable='false'></img>
        <img src={JavaScriptIcon} alt="javascript" draggable='false'></img>
        <img src={BootStrapIcon} alt="bootstrap" draggable='false'></img>
        <img src={ReactIcon} alt="react" draggable='false'></img>
        <img src={ScssIcon} alt="scss" draggable='false'></img>
        <img src={ViteIcon} alt="vite" draggable='false'></img>
        <img src={WebpackIcon} alt="webpack" draggable='false'></img>
      </div>
    </div>
  )
};

export default HomeInfo
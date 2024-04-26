import BootStrapIcon from '../assets/images/icons/bars/bootstrap-bar.svg';
import HtmlIcon from '../assets/images/icons/bars/html-bar.svg';
import CssIcon from '../assets/images/icons/bars/css-bar.svg';
import JavaScriptIcon from '../assets/images/icons/bars/javascript-bar.svg';
import ReactIcon from '../assets/images/icons/bars/react-bar.svg';
import ScssIcon from '../assets/images/icons/bars/scss-bar.svg';
import ViteIcon from '../assets/images/icons/bars/vite-bar.svg';
import WebpackIcon from '../assets/images/icons/bars/webpack-bar.svg';
import ProfileIcon from '../assets/images/icons/decor/user-solid.svg';
import TauriBar from '../assets/images/icons/bars/tauri-bar.svg';
import ReactNativeBar from '../assets/images/icons/bars/reactnative-bar.svg';
import SkillSet from '../Data/json/misc/skillSet.json'

function HomeInfo() {

  return (
    <div className="home-info">
      <div className='info-title'>
        <img src={ProfileIcon} draggable="false" alt="Profile icon"></img>
        <h1>About Me</h1>
      </div>
      <hr></hr>
      <p>👋 Hello there! I'm Atomic, a dedicated front-end developer with a love for turning innovative ideas into reality. I mostly work in web development, however im also looking to expanding my skill set into other areas aswell.</p>
      <a href='/about'><button className="btn btn-primary">About Me</button></a>
      <div className="icon-list">
        <img src={HtmlIcon} alt="html 5" draggable='false'></img>
        <img src={CssIcon} alt="css 3" draggable='false'></img>
        <img src={JavaScriptIcon} alt="javascript" draggable='false'></img>
        <img src={BootStrapIcon} alt="bootstrap" draggable='false'></img>
        <img src={ReactIcon} alt="react" draggable='false'></img>
        <img src={ScssIcon} alt="scss" draggable='false'></img>
        <img src={ViteIcon} alt="vite" draggable='false'></img>
        <img src={ReactNativeBar} alt="React Native" draggable='false'></img>
        <img src={TauriBar} alt="Tauri" draggable='false'></img>
        <img src={WebpackIcon} alt="webpack" draggable='false'></img>
      </div>
    </div>
  )
};

export default HomeInfo
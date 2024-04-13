import TopWave from '../assets/images/decorations/banner-wave-yellow-bottom.svg';
import BottomWave from '../assets/images/decorations/banner-wave-yellow.svg';
import BootStrapIcon from '../assets/images/icons/bars/bootstrap-bar.svg';
import HtmlIcon from '../assets/images/icons/bars/html-bar.svg';
import CssIcon from '../assets/images/icons/bars/css-bar.svg';
import JavaScriptIcon from '../assets/images/icons/bars/javascript-bar.svg';
import ReactIcon from '../assets/images/icons/bars/react-bar.svg';
import ScssIcon from '../assets/images/icons/bars/scss-bar.svg';
import ViteIcon from '../assets/images/icons/bars/vite-bar.svg';
import WebpackIcon from '../assets/images/icons/bars/webpack-bar.svg';

function HomeSkills(){
  const CreateSkillItem = ({itemName}) => {
    return (
      <div className="skill-item">
        <h1>{itemName}</h1>
      </div>
    )
  }

  return(
    <div className='home-skills'>
      <img src={TopWave} draggable='false'></img>
      <div className='home-inner-content'>
        <h1>Skills</h1>
        <hr></hr>
        <div className='skill-item-container'>
          {/*Languages*/}
         <CreateSkillItem itemName="Html 5"/>
         <CreateSkillItem itemName="Css 3"/>
         <CreateSkillItem itemName="JavaScript"/>
         {/*Tech*/}
         <CreateSkillItem itemName="Bootstrap"/>
         <CreateSkillItem itemName="React"/>
         <CreateSkillItem itemName="Scss"/>
         <CreateSkillItem itemName="Vite"/>
         <CreateSkillItem itemName="Webpack"/>
          {/*Industry skills*/}
          <CreateSkillItem itemName="Web Development"/>
          <CreateSkillItem itemName="Social media marketing"/>
          <CreateSkillItem itemName="UI/UX Design"/>
          <CreateSkillItem itemName="Computer Maintence"/>
        </div>
      </div>
      <img src={BottomWave} draggable='false'></img>
    </div>
  )
}

export default HomeSkills;
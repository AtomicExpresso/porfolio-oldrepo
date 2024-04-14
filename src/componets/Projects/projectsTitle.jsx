import ReactBar from '../../assets/images/icons/bars/react-bar.svg';
import JavascriptBar from '../../assets/images/icons/bars/javascript-bar.svg';
import SassBar from '../../assets/images/icons/bars/scss-bar.svg';
import TauriBar from '../../assets/images/icons/bars/tauri-bar.svg';
import ReactNativeBar from '../../assets/images/icons/bars/reactnative-bar.svg';

function ProjectsTile(){
  const ConstructProjectFilter = ({Img, Title}) => {
    return (
      <div className="project-filter-item">
        <img src={Img} alt={Title} draggable='false'></img>
      </div>
    )
  }

  return (
    <div className="projects-page-title">
      <h1>My Project's</h1>
      <p>Here's a list of my projects. Built using a wide range of languages, frameworks and libaries. Each project is responsive and supports desktop & mobile</p>
      <hr></hr>
      <div className="project-filter">
        <ConstructProjectFilter
          Img={ReactBar}
          title='React'
        />
        <ConstructProjectFilter
          Img={JavascriptBar}
          title='Vanillia Javascript'
        />
        <ConstructProjectFilter
          Img={SassBar}
          title='Sass / Scss'
        />
        <ConstructProjectFilter
          Img={TauriBar}
          title='Tauri'
        />
        <ConstructProjectFilter
          Img={ReactNativeBar}
          title='React Native'
        />
      </div>
    </div>
  )
}

export default ProjectsTile;
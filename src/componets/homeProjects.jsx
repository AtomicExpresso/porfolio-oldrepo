import ProjectIcon from '../assets/images/icons/decor/paintbrush-solid.svg';

function HomeProjects(){

  const ProjectItem = ({Heading, Desc, BackContent}) => {
    return (
      <div className="project-item" data-front-content={Heading} data-back-content={Desc}>
      <div className="project-front"></div>
      <div className="project-back">
        <h1>{Heading}</h1>
        {BackContent}
        <button className="btn btn-primary">View Project</button>
      </div>
    </div>

    )
  }

  return (
    <div className="home-projects">
      <div className='project-title'>
        <img src={ProjectIcon} draggable='false'></img>
        <h1>My Projects</h1>
      </div>
      <p>Heres a list of my best projects i've developed and worked on</p>
      <hr></hr>
      <div className="project-list-container">
        <ProjectItem 
        Heading='Twitter Clone' 
        Desc="Lorem ipusm mufer itue"
        BackContent={<p>Its a front-end twitter clone built in React. Also was my first React project</p>}
       />
      </div>
    </div>
  )
}

export default HomeProjects
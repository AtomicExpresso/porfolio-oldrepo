

function HomeProjects(){

  const ProjectItem = ({Heading, Desc, BackContent}) => {
    return (
      <div className="project-item" data-front-content={Heading} data-back-content={Desc}>
      <div className="front">
        <h1>{Heading}</h1>
      </div>
      <div className="back">
        {BackContent}
        <button className="btn btn-primary">View Project</button>
      </div>
    </div>

    )
  }

  return (
    <div className="home-projects">
      <h1>My Projects</h1>
      <p>Heres a list of my best projects i've developed and worked on</p>
      <hr></hr>
      <div className="project-list-container">
        <ProjectItem 
        Heading='Twitter Clone' 
        Lang="React • Scss • JS" 
        Desc="Lorem ipusm mufer itue"
        BackContent={<p>This is the back content for the Twitter Clone project.</p>}
       />
      </div>
    </div>
  )
}

export default HomeProjects
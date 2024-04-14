import ProjectHero from "../componets/Projects/projectHero";
import ProjectsTile from "../componets/Projects/projectsTitle";
import ProjectContainer from "../componets/Projects/projectContainer";

function ProjectPage(){
  return (
    <div>
      <ProjectHero/>
      <ProjectsTile/>
      <ProjectContainer/>
    </div>
  )
}

export default ProjectPage;
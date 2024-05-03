import ProjectHero from "../componets/Projects/projectHero";
import ProjectsTile from "../componets/Projects/projectsTitle";
import ProjectContainer from "../componets/Projects/projectContainer";
import {Helmet} from "react-helmet";

function ProjectPage(){
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects</title>
        <meta name="description" content="Heres a full list of my best public projects. Build using a wide range of languages and libaries" />
      </Helmet>
      <ProjectHero/>
      <ProjectsTile/>
      <ProjectContainer/>
    </div>
  )
}

export default ProjectPage;
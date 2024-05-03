import { HomeHero } from "../componets/homeHero";
import HomeInfo from "../componets/homeInfo";
import HomeSkills from "../componets/homeSkills";
import HomeProjects from "../componets/homeProjects";
import {Helmet} from "react-helmet";

function HomePage(){
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pumped.dev Porfiolo</title>
        <meta name="description" content="Welcome to my porfilo! here you can view some of my public projects, blog, and more. Feel free to get in touch if you have any questions!" />
      </Helmet>
      <HomeHero></HomeHero>
      <HomeInfo></HomeInfo>
      <HomeSkills></HomeSkills>
      <HomeProjects></HomeProjects>
    </div>
  )
}

export default HomePage
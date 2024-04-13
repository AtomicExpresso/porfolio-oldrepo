import { HomeHero } from "../componets/homeHero";
import HomeInfo from "../componets/homeInfo";
import HomeSkills from "../componets/homeSkills";
import HomeProjects from "../componets/homeProjects";

function HomePage(){
  return (
    <div>
      <HomeHero></HomeHero>
      <HomeInfo></HomeInfo>
      <HomeSkills></HomeSkills>
      <HomeProjects></HomeProjects>
    </div>
  )
}

export default HomePage
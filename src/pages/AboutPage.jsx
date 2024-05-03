import AboutHero from "../componets/About/aboutHero";
import AboutContent from "../componets/About/aboutContent";
import {Helmet} from "react-helmet";

function AboutPage(){
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About me</title>
        <meta name="description" content="About me page, goes over a brief description about me, an overview of my skills and education" />
      </Helmet>
      <AboutHero/>
      <AboutContent/>
    </div>
  )
}

export default AboutPage;
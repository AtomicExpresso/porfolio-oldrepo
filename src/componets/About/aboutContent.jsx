import AboutIcon from '../../assets/images/icons/decor/user-solid.svg';

function AboutContent(){
  const ConstructAboutPara = ({altTxt, Para}) => {
    return(
      <p alt={altTxt}>{Para}</p>
    )
  }

  return(
    <div className="about-content">
      <div className="about-title">
        <img src={AboutIcon}></img>
        <h1>About Me</h1>
      </div>
      <hr></hr>
      <div className="about-text">
      <ConstructAboutPara
        altTxt='Paragrapth one'
        Para="👋 Hello there! Im Felix, a passionate and dedicated full-stack developer with a love for turning innovative ideas into reality through code. I thrive in the dynamic world of software development, constantly seeking new challenges and opportunities to expand my skills"
      />
      <ConstructAboutPara
        altTxt='Paragrapth two'
        Para="My journey into the world of software development began at a young age when I first discovered the magic of coding. From building simple games to experimenting with website design, I was hooked from the start. As I grew older, my fascination with technology only deepened, driving me to pursue formal education in computer science to refine my skills and knowledge."
      />
      <ConstructAboutPara
        altTxt='Paragrapth three'
        Para="I'm a 20 year old computer science student, I'm fully immersed in the exciting and ever-evolving field of software development. I've spent countless hours diving into programming languages, mastering frameworks, and exploring the latest trends and technologies. From front-end technologies like HTML, SCSS, and React to back-end frameworks like Node.js and Django, I'm always eager to expand my skills and tackle new challenges head-on."
      />
      <ConstructAboutPara
        altTxt='Paragrapth four'
        Para="Apart from programming, i also enjoy going on walks, hiking in nature, reading a good book and cooking."
      />
      </div>
    </div>
  )
}

export default AboutContent
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
        <img src={AboutIcon} alt="About me icon"></img>
        <h1>About Me</h1>
      </div>
      <hr></hr>
      <div className="about-text">
      <ConstructAboutPara
        altTxt='Paragrapth one'
        Para="👋 Hello there! Im Atomic, a passionate and dedicated front-end developer with a love for turning innovative ideas into reality through code. i am constantly seeking new challenges and opportunities to expand my skills"
      />
      <ConstructAboutPara
        altTxt='Paragrapth three'
        Para="I'm a 19 year old computer science student, I've spent countless hours diving into programming languages, mastering frameworks, and exploring the latest technologies. From front-end technologies like HTML, SCSS, and React to back-end frameworks like Node.js, I'm always eager to expand my skills and tackle new challenges head-on."
      />
      <ConstructAboutPara
        altTxt='Paragrapth four'
        Para="Apart from programming, i also like going for walks, hiking in nature, reading a good book and cooking."
      />
      </div>
    </div>
  )
}

export default AboutContent
import TwitterCloneTn from '../../assets/images/thumbnails/twitter-clone.webp';
import PersonalWebsiteTn from '../../assets/images/thumbnails/personal-website.webp';


function ProjectContainer(){
  const ConstructProjectItem = ({Title, Lang, Img, Desc, Link, LinkTwo}) => {
    return (
      <div className="project-page-item">
        <img src={Img} draggable='false'></img>
        <h1>{Title}</h1>
        <h2>{Lang}</h2>
        <p>{Desc}</p>
        <div className='project-item-btn'>
          <a href={Link}>
            <button className="btn btn-primary">Live View</button>
          </a>
          <a href={LinkTwo}>
            <button className="btn btn-success">Source Code</button>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="project-container">
      <ConstructProjectItem
        Title='Twitter Clone'
        Lang='React • CSS3 • Bootstrap'
        Img={TwitterCloneTn}
        Desc='A front-end clone of Twitter built in React. This was my first React project'
        Link='https://react-frontend-twitter-clone.netlify.app/'
        LinkTwo='https://github.com/AtomicExpresso/twitter-clone'
      />
      <ConstructProjectItem
        Title='Personal Website'
        Lang='React • Sass • Bootstrap'
        Img={PersonalWebsiteTn}
        Desc='My personal website and porfoilo. Built using React, Sass/Scss and Bootstrap'
        Link='/'
        LinkTwo='https://github.com/AtomicExpresso/porfolio-v4'
      />
    </div>
  )
}

export default ProjectContainer
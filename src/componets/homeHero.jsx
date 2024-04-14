import ProfilePic from '../assets/images/profile-pic.png';
import Twitter from '../assets/images/icons/twitter.svg';
import Youtube from '../assets/images/icons/youtube.svg';
import Instagram from '../assets/images/icons/instagram.svg';
import Discord from '../assets/images/icons/discord.svg';
import WhiteWave from '../assets/images/decorations/banner-wave-white.svg';


function HomeHero(){
  return (
    <div className="hero-container">
      <div className='hero-group'>
        <div className="hero-col-1">
          <h1>I'm <span>Felix</span></h1>
          <h2>Foobar</h2>
          <p>Passionate full-stack developer with a creative mindset, dedicated to transforming innovative concepts into functional and user-friendly web applications through proficient coding and a continuous pursuit of learning</p>
          <div className="hero-social-links">
            <img src={Twitter} alt='Twitter' draggable='false'></img>
            <img src={Youtube} alt='Youtube' draggable='false'></img>
            <img src={Instagram} alt='Instagram' draggable='false'></img>
            <img src={Discord} alt='Discord' draggable='false'></img>
          </div>
          <button className="btn btn-primary">View Projects</button>
        </div>
        <div className="hero-col-2">
          <img src={ProfilePic} draggable='false'></img>
        </div>
      </div>
      <img src={WhiteWave} draggable='false'></img>
    </div>
  )
}

export {HomeHero}
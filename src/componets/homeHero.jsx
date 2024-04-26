import { useEffect, useState } from 'react';
import ProfilePic from '../assets/images/profile-pic.webp';
import Twitter from '../assets/images/icons/twitter.svg';
import Youtube from '../assets/images/icons/youtube.svg';
import Instagram from '../assets/images/icons/instagram.svg';
import Discord from '../assets/images/icons/discord.svg';
import WhiteWave from '../assets/images/decorations/banner-wave-white.svg';

function HomeHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = ProfilePic;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className='hero-group'>
        <div className="hero-col-1">
          <h1>Hello 👋, I'm <span>Atomic</span></h1>
          <h2>I'm a <span>Front end developer</span></h2>
          <p>front-end developer, dedicated to transforming innovative concepts into functional and user-friendly web applications</p>
          <div className="hero-social-links">
            <a href='https://twitter.com/pumped212'><img src={Twitter} alt='Twitter' draggable='false'></img></a>
            <a href="#"><img src={Youtube} alt='Youtube' draggable='false'></img></a>
            <a href="#"><img src={Instagram} alt='Instagram' draggable='false'></img></a>
            <a href="#"><img src={Discord} alt='Discord' draggable='false'></img></a>
          </div>
          <a href='/projects'><button className="btn btn-primary">View Projects</button></a>
        </div>
        <div className="hero-col-2">
          {imageLoaded && <img src={ProfilePic} draggable='false' alt="Profile picture"></img>}
        </div>
      </div>
      <img src={WhiteWave} draggable='false' alt="Page wave"></img>
    </div>
  );
}

export { HomeHero };
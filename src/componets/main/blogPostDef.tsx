import React from "react";
import { useState } from "react";
import TwitterIcon from '../../assets/images/icons/functionalIcon/twitter.svg';
import LinkIcon from '../../assets/images/icons/functionalIcon/link-solid.svg';
import BlogHero from "../Blog/blogHero";
import ShareIcon from "../../assets/images/icons/functionalIcon/share-icon.svg";

/*Creates the blog post page based off the switch statment from BlogPostPage*/
const CreatePost = ({PostTitle, PostDate, PostType, PostText}: {PostTitle: string, PostText: JSX.Element, PostDate: string, PostType: string}) => {
  //Handles the blog share icon
  const [open, setOpen] = useState(false)

  const openPopup = () => {
    setOpen(true);
  };
  const closePopup = () => {
    setOpen(false);
  };

  //Constructor for the share buttons within the share div
  const CreateShareBtn = ({icon, name, onClick}: {icon: string, name:string, onClick: React.MouseEventHandler<HTMLDivElement>}) => {
    return (
      <div className="share-this" onClick={onClick}>
        <img src={icon} alt='Share this page' draggable='false'></img>
        <h1>{name}</h1>
      </div>
    )
  }

  /*Copys current url to clipboard*/
  const CopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  }

  /*opens up twitter and displays a tweet with current url*/
  const TweetUrl = () => {
    const url = window.location.href;
    window.open('https://twitter.com/intent/tweet?text=' + '&url=' + encodeURIComponent(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600');
    return false;
  }

  //For the popup page
  return (
    <div className="blog-post-page" onClick={() => open ? closePopup : null}>
    <BlogHero/>
    <div className="blog-post-content">
    <h1>{PostTitle}</h1>
        <div className="blog-post-page-row">
          <a href="https://twitter.com/pumped212"><h2>By Admin</h2></a>
          <h2>•</h2>
          <h2>{PostDate}</h2>
          <h2>•</h2>
          <div className="post-type-container"><h2><span>#</span>{PostType}</h2></div>
          <div className="blog-share-icon"><img src={ShareIcon} draggable="false" alt='Share this' onClick={openPopup}></img>
          {open && (
            <div className="blog-share-popup">
              <CreateShareBtn icon={TwitterIcon} name="Twitter" onClick={TweetUrl}/>
              <CreateShareBtn icon={LinkIcon} name="Url" onClick={CopyUrl}/>
            </div>
          )}
          </div>
        </div>
        <hr></hr>
      <div className="div">{PostText}</div>
    </div>
    </div>
  )
};

export default CreatePost;
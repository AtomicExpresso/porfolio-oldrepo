import DefaultImage from '../../assets/images/backgrounds/bloghero-bg.jpg';
import { BlogPostOne, BlogPostTwo } from '../Storage/BlogTextContent';

/*This will display an overview of blog posts, when a button is clicked on the post preview, it will take you to the corrasponding blog post page. All of the blog post text content is stored in "storage/BlogTextContent.jsx"*/
function BlogContent(){
  const DisplayBlogPost = ({Title, Type, Date, Desc, CoverImg, Link}) => {
    return (
      <div className="blog-post-preview">
        <img src={CoverImg} alt="blog thumbnail" draggable='false' title={Title}></img>
        <h1>{Title}</h1>
        <div className='blog-post-info'>
          <h2>{Type} •</h2>
          <h2>{Date}</h2>
        </div>
        <p>{Desc}</p>
        <a href={Link}><button className="btn btn-primary">View</button></a>
      </div>
    )
  }

  return (
    <div className='blog-content-container'>
      <DisplayBlogPost
        Title={BlogPostOne.Title}
        Type= {BlogPostOne.PostType}
        Date= {BlogPostOne.Date}
        Desc={BlogPostOne.PostPreview}
        CoverImg={DefaultImage}
        Link="blog/PostOne"
      />
      <DisplayBlogPost
        Title={BlogPostTwo.Title}
        Type={BlogPostTwo.PostType}
        Date={BlogPostTwo.Date}
        Desc={BlogPostTwo.PostPreview}
        CoverImg={DefaultImage}
        Link="blog/PostTwo"
      />
    </div>
  )
}

export default BlogContent
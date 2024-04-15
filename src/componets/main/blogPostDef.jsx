import BlogHero from "../Blog/blogHero";

/*Creates a blog post based off the switch statment from BlogPostPage*/
const CreatePost = ({PostTitle, PostDate, PostType, PostText}) => {
  return (
    <div className="blog-post-page">
    <BlogHero/>
    <div className="blog-post-content">
    <h1>{PostTitle}</h1>
        <div className="blog-post-page-row">
          <a href="https://twitter.com/pumped212"><h2>By Admin</h2></a>
          <h2>•</h2>
          <h2>{PostDate}</h2>
          <h2>•</h2>
          <div className="post-type-container"><h2><span>#</span>{PostType}</h2></div>
        </div>
        <hr></hr>
      <p>{PostText}</p>
    </div>
    </div>
  )
};

export default CreatePost;
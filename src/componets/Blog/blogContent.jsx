import { BlogPost } from '../Storage/BlogTextContent';

/*This will display an overview of blog posts, when a button is clicked on the post preview, it will take you to the corrasponding blog post page. All of the blog post text content is stored in "storage/BlogTextContent.jsx"*/
function BlogContent(){
  const DisplayBlogPost = ({item}) => {
    return (
      <div className="blog-post-preview">
        <img src={item.Img} alt="blog thumbnail" draggable='false' title={item.Title}></img>
        <h1>{item.Title}</h1>
        <div className='blog-post-info'>
          <h2>{item.PostType} •</h2>
          <h2>{item.Date}</h2>
        </div>
        <div>{item.PostPreview}</div>
        <a href={`blog/${item.Link}`}><button className="btn btn-primary">View</button></a>
      </div>
    )
  }

  const BlogPostData = () => BlogPost.map(item => {
    return <DisplayBlogPost item={item} key={item.id}/>
  })

  return (
    <div className='blog-content-container'>
      <BlogPostData/>
    </div>
  )
}

export default BlogContent
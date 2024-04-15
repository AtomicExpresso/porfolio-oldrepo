const CreatePost = ({PostTitle, PostDate, PostType, PostText}) => {
  return (
    <div className="blog-post-page">
    <div className="blog-post-content">
    <h1>{PostTitle}</h1>
        <div className="blog-post-page-row">
          <h2>By Admin</h2>
          <h2>•</h2>
          <h2>{PostDate}</h2>
          <h2>•</h2>
          <h2>#{PostType}</h2>
        </div>
        <hr></hr>
      <p>{PostText}</p>
    </div>
    </div>
  )
};

export default CreatePost;
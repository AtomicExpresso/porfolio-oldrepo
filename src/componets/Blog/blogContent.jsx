import DefaultImage from '../../assets/images/backgrounds/bloghero-bg.jpg'

function BlogContent(){
  const DisplayBlogPost = ({Title, Type, Date, Desc, CoverImg}) => {
    return (
      <div className="blog-post-preview">
        <img src={CoverImg} alt="blog thumbnail" draggable='false' title={Title}></img>
        <h1>{Title}</h1>
        <div className='blog-post-info'>
          <h2>{Type} •</h2>
          <h2>{Date}</h2>
        </div>
        <p>{Desc}</p>
        <button className="btn btn-primary">View</button>
      </div>
    )
  }

  return (
    <div className="blog-content-container">
      <DisplayBlogPost
        Title= 'First Post!'
        Type='General'
        Date='4/13/2024'
        Desc='First blog post! just testing this out'
        CoverImg={DefaultImage}
      />
      <DisplayBlogPost
        Title= 'Second Post!'
        Type='Updates'
        Date='4/13/2024'
        Desc='First blog post! just testing this out'
        CoverImg={DefaultImage}
      />
    </div>
  )
}

export default BlogContent
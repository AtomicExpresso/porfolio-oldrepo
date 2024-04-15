import DefaultImage from '../../assets/images/backgrounds/bloghero-bg.jpg'

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
        Title="Post one"
        Type="Updates"
        Date="4/14/2024"
        Desc="First post!!!!"
        CoverImg={DefaultImage}
        Link="blog/PostOne"
      />
      <DisplayBlogPost
        Title="Post two"
        Type="Updates"
        Date="4/14/2024"
        Desc="Second post!!!!"
        CoverImg={DefaultImage}
        Link="blog/PostTwo"
      />
    </div>
  )
}

export default BlogContent
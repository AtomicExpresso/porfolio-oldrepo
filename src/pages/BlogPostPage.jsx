import { BlogPostOne, BlogPostTwo } from "../componets/Storage/BlogTextContent";
import { useParams } from "react-router-dom";
import CreatePost from "../componets/main/blogPostDef";

function BlogPostPage(){
  const { id } = useParams();

  /*Changes the render based on which dynamic page your on. The blog text, title, date, etc is stored in "Storage/BlogTextContent.jsx". I did this so, all the text could be in one place and accesiable to other componets*/
  switch(id){
    case "PostOne": {
      return (
      <CreatePost
        PostTitle= {BlogPostOne.Title}
        PostDate= {BlogPostOne.Date}
        PostType= {BlogPostOne.PostType}
        PostText= {BlogPostOne.PostText}
      />)
    }
    case "PostTwo": {
      return (
      <CreatePost
        PostTitle= {BlogPostTwo.Title}
        PostDate= {BlogPostTwo.Date}
        PostType= {BlogPostTwo.PostType}
        PostText= {BlogPostTwo.PostText}
      />)
    }
  }
}

export default BlogPostPage;
import { useParams } from "react-router-dom";
import CreatePost from "../componets/main/blogPostDef";

function BlogPostPage(){
  const { id } = useParams();


  switch(id){
    case "PostOne": {
      return (
      <CreatePost
        PostTitle="First blog post"
        PostDate="4/14/2024"
        PostType="Updates"
        PostText="Hi this is my first post, just testing..."
      />)
    }
    case "PostTwo": {
      return (
      <CreatePost
        PostTitle="Second blog post"
        PostDate="4/14/2024"
        PostType="Updates"
        PostText="Hi this is my second post, just testing..."
      />)
    }
  }
}

export default BlogPostPage;
import React from "react";
import { BlogPost } from "../componets/Storage/BlogTextContent";
import { useParams } from "react-router-dom";
import CreatePost from "../componets/main/blogPostDef";

function BlogPostPage(){
  const { id } = useParams();
  /*Changes the render based on which dynamic page your on. The blog text, title, date, etc is stored in "Storage/BlogTextContent.jsx". I did this so, all the text could be in one place and accesiable to other componets*/

  if (id) {
    const postId: string = id.substring(4); // Extract the numeric part of the id
    const postIdNumber: number = parseInt(postId, 10); //Converts the type form the postId string to a number

    const post = BlogPost[postIdNumber]; // Access the corresponding object in BlogPost array
    
    // Check if post exists before rendering
    if (post) {
      return (
        <CreatePost
          PostTitle={post.Title}
          PostDate={post.Date}
          PostType={post.PostType}
          PostText={post.PostPara}
        />
      );
    } else {
      return (
        <h1>Blog post not found</h1>
      );
    }
  }
}

export default BlogPostPage;
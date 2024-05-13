import React from "react";
import BlogHero from "../componets/Blog/blogHero";
import BlogContent from "../componets/Blog/blogContent";
import {Helmet} from "react-helmet";

function BlogPage(){
  return(
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pumped.dev Blog</title>
        <meta name="description" content="Welcome to my personal blog, here ill write about things which may or may not be development related" />
      </Helmet>
      <BlogHero/>
      <BlogContent/>
    </div>
  )
}

export default BlogPage
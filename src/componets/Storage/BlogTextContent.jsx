/*Blog post content is stored here, Each post has a Title, Date, PostType, Preview and Paragraphs*/
//It would be better and more efficient to make some sort of DB and backend for this, but im still trying to learn back-end development before i attempt that

import BlogPostThis from "./Writeings/Buildingaportfiolo";

const BlogPostOne = {
  Title: "Building a portfolio",
  Date: "April 15th, 2024",
  PostType: "Updates",
  PostPreview: "I discuss how i setup my portfolio and my thought proccess behind it",
  PostPara: BlogPostThis()
}

const BlogPostTwo = {
  Title: "Test Post",
  Date: "April 14th, 2024",
  PostType: "Life",
  PostPreview: "A Test post, idk what to put here",
  PostPara: "Test Post........"
}

export {BlogPostOne, BlogPostTwo}
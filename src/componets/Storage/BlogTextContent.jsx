/*Blog post content is stored here, Each post has a Title, Date, PostType, Preview and Paragraphs*/
//It would be better and more efficient to make some sort of DB and backend for this, but im still trying to learn back-end development before i attempt that

import BlogPostThis from './buildBlog';
import DefaultImage from '../../assets/images/backgrounds/bloghero-bg.webp';

// Changed this to an array, if you want to add a new blog post just simply copy an object and assign a new id
const BlogPost = [{
  id: 0,
  Img: DefaultImage,
  Title: "Building a portfolio",
  Date: "April 15th, 2024",
  PostType: "Updates",
  PostPreview: "I discuss how i setup my portfolio and my thought proccess behind it",
  Link: `Post`,
  PostPara: BlogPostThis("porfiloPost")
},
{
  id: 1,
  Img: DefaultImage,
  Title: "Test Post",
  Date: "April 14th, 2024",
  PostType: "Life",
  PostPreview: "A Test post, idk what to put here",
  Link: `Post`,
  PostPara: BlogPostThis("learningReact")
}
]

BlogPost.forEach((post) => {
  post.Link = `Post${post.id}`;
});

export {BlogPost}
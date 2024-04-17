/*Blog post content is stored here, Each post has a Title, Date, PostType, Preview and Paragraphs*/
const HeadingBuild = ({text}) => {
  return (
      <h2 style={{fontSize: '22px'}}>{text}</h2>
  )
};

const ParaBuild = ({text}) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
};

const BlogPostOne = {
  Title: "Building a portfolio",
  Date: "April 15th, 2024",
  PostType: "Updates",
  PostPreview: "I discuss how i setup my portfolio and my thought proccess behind it",
  PostPara: 
  <div>
    <ParaBuild text="Developer portfolios are a great way to make you stand out from the crowd to a potential client or recruiter. In this article I'll discuss how I built my portfolio and my thought process behind it.
"/> 
    <HeadingBuild text="Decide on a theme:"/>
    <ParaBuild text="Developer portfolios are a great way to make you stand out from the crowed to a potential client or recuriter. In this article i'll discuss how i built my portfilo and my thought process behind it."/> 
  </div>
}

const BlogPostTwo = {
  Title: "Test Post",
  Date: "April 14th, 2024",
  PostType: "Life",
  PostPreview: "A Test post, idk what to put here",
  PostPara: "Hi this is my first post, just testing..."
}

export {BlogPostOne, BlogPostTwo}
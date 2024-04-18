/*Blog post content is stored here, Each post has a Title, Date, PostType, Preview and Paragraphs*/
//It would be better and more efficient to make some sort of DB and backend for this, but im still trying to learn back-end development before i attempt that

const BlogPostOne = {
  Title: "Building a portfolio",
  Date: "April 15th, 2024",
  PostType: "Updates",
  PostPreview: "I discuss how i setup my portfolio and my thought proccess behind it",
  PostPara: 
  <div>
    <p>Developer portfolios are an excellent tool for making a lasting impression on potential clients or recruiters. In this article, I'll walk you through how I built my portfolio and the thought process behind it.</p>
    <h1>Things to consider:</h1>
    <p>When i was building my portfolio, i wanted the visitor to be able to:</p>
    <ul>
      <li>Find my portfolio easily on the internet</li>
      <li>Easily contact me, using either social media or email</li>
      <li>See my projects and what kind of work i do</li>
    </ul>
  </div>
}

const BlogPostTwo = {
  Title: "Test Post",
  Date: "April 14th, 2024",
  PostType: "Life",
  PostPreview: "A Test post, idk what to put here",
  PostPara: <div><p>ff</p></div>
}

export {BlogPostOne, BlogPostTwo}
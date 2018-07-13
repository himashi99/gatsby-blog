import React from 'react'
import Link from 'gatsby-link'
import downArrow from "../images/down-arrow.svg"; // Tell Webpack this JS file uses this image
import waveHand from "../images/wave-hand.svg";

const IndexPage = ({data}) => (
<div class="hello">
  <main>
    <div>
      <img src={downArrow} alt="Down Arrow" height="30px" width="40px"/>
    </div>
  </main>

  <section
    style={{
      margin: '100px auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
  }}
  >


    <h1>Hi</h1>
    <img src={waveHand} alt="Down Arrow" height="40px" width="40px"/>
    <br></br>
    <br></br>
    <h3>I{`'`}m Himashi, a front-end web developer based in Toronto.</h3>
    <p>Follow along as I try to improve my programming skills by completing the #{`100DaysofCode`} challenge!</p>

    <h2>Index</h2>

    <ul>
      {data.allMarkdownRemark.edges.map(post => (
      <li>
        <Link
        key={post.node.id}
        to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
        </Link>
      </li>
        ))}
    </ul>
  </section>
</div>
)

// give me all 10 pages and publish the edtes, node and frontmatter
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
    edges {
      node {
        id
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`

export default IndexPage

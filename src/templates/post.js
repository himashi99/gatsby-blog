import React from 'react';
import Helmet from 'react-helmet';


//react component
//pull out post from data.markdownRemark and assigning it to post
export default function Template({data}) {
  const {markdownRemark: post} = data;
  // const post = data.markdownRemark;

//return div
  return (
    <div
    style={{
      color: `tomato`,
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
    }}

    >
      <h1
      style={{
        color: `tomato`,
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}

      >{post.frontmatter.title} </h1>
      <div dangerouslySetInnerHTML = {{__html: post.html}}
      style={{
        color: `tomato`,
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    />

        <div
        style={{
          color: `tomato`,
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
        >
        </div>

        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
          }}>


        </div>



    </div>
  )
}

//creating query
//grap BlogPostByPath and finding particular markdown file
//usihng graphql to say we want html, frontmatter and path and title
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

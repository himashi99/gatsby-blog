/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');

//using create function from the API
 exports.createPages = ({boundActionCreators, graphql}) => {
   const {createPage} = boundActionCreators;

//bring in postTemplate
   const postTemplate = path.resolve('src/templates/post.js');

//query to get all of the markdown files (posts)
   return graphql(`{
     allMarkdownRemark {
       edges {
         node {
           html
           id
           frontmatter {
             path
             title
             date
           }
         }
       }
     }
   }`)

   .then(res => {
     if(res.errors) {
       return Promise.reject(res.errors);
     }

//array of all of our markdown files (posts)
//itterate over them and create page with specified path and component
     res.data.allMarkdownRemark.edges.forEach(({node}) => {
       createPage({
         path: node.frontmatter.path,
         component: postTemplate,

       })
     }) //edge is the node itself (useful data needed to register page)
   })
 }

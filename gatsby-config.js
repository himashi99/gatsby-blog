module.exports = {
  siteMetadata: {
    title: '#100 Days of Coding',
  },

  //use these plugins
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`, //where markdown files will be and can query them
        name: `pages`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
  ],
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/root`,
      },
    },
  ],
  siteMetadata: {
    title: `Digital Garden`,
  },
}

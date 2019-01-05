module.exports = {
  siteMetadata: {
    title: "Shane Brunson",
    author: "Shane Brunson"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        ignore: ["prismjs/"]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript"
  ]
};

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Shane B",
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
        ignore: ["prismjs/", `${__dirname}/components/index.css`]
      }
    },
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_SECRET}`
        },
        queries: [
          // `query get ($user: String!, $first: Int!) {
          `query {
            user (login: "wsbrunson") {
              repositories (first: 100) {
                edges {
                  node {
                    id
                    name
                    description
                    forkCount
                    updatedAt
                    url
                  }
                }
              }
            }
          }`
          // { user: process.env.GITHUB_USER, first: 200 }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-mdx"
  ]
};

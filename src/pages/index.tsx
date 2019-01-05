import { graphql } from "gatsby";
import Date from "../components/Date";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Link from "../components/Link";
import React from "react";
import { GraphQLData } from "../types";

const BlogIndex = ({ data }: { data: GraphQLData }) => (
  <Layout>
    <Helmet title={data.site.siteMetadata.title} />
    {data.allMarkdownRemark.edges.map(({ node }) =>
      node.path !== "/404/" ? (
        <div key={node.fields.slug} className="mb4">
          <h3 className="ma0 f3">
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <Date>{node.frontmatter.date}</Date>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ) : null
    )}
  </Layout>
);

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "DD MMM YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

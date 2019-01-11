import { GraphQLData } from "../types";
import { graphql } from "gatsby";
import Date from "../components/Date";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import React from "react";

const BlogPostTemplate = ({ data }: { data: GraphQLData }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  console.log(data);

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h2 className="ma0 pt5 f2 dark-red">{post.frontmatter.title}</h2>
      <Date>{post.frontmatter.date}</Date>
      <p
        className="mw7 f4 lh-copy"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <hr />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
    }
  }
`;

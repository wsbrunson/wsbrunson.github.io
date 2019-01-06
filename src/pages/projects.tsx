import { graphql } from "gatsby";
import Date from "../components/Date";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Link from "../components/Link";
import React from "react";
import { GraphQLData } from "../types";

const BlogIndex = ({ data }: { data: GraphQLData }) => (
  <Layout>
    {data.allGithubRepositories.edges.map(({ node }) => (
      <div key={node.id} className="mv5">
        <h3 className="ma0 f3">
          <Link to={node.url}>{node.name}</Link>
        </h3>
        <Date>{node.updatedAt}</Date>
        <p>{node.description}</p>
      </div>
    ))}
  </Layout>
);

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allGithubRepositories {
      edges {
        node {
          id
          name
          url
          updatedAt
          description
        }
      }
    }
  }
`;

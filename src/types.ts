interface MarkdownData {
  path: string;
  frontmatter: {
    title: string;
    date: string;
  };
  excerpt: string;
  html: string;
  fields: {
    slug: string;
  };
}

export interface GraphQLData {
  site: {
    siteMetadata: {
      title: string;
    };
  };

  allMarkdownRemark: {
    edges: Array<{
      node: MarkdownData;
    }>;
  };

  markdownRemark: MarkdownData;
}

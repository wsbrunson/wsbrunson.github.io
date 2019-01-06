interface GithubRepositoryData {
  id: string;
  name: string;
  description: string;
  forkCount: Number;
  updatedAt: string;
  url: string;
}

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

interface GraphQLCollection<TData> {
  edges: Array<{
    node: TData;
  }>;
}

interface SiteCollection<TData> {
  siteMetadata: TData;
}

export interface GraphQLData {
  allGithubRepositories: GraphQLCollection<GithubRepositoryData>;
  allMarkdownRemark: GraphQLCollection<MarkdownData>;
  markdownRemark: MarkdownData;
  site: SiteCollection<{
    title: string;
  }>;
}

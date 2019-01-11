import React from "react";
import Link from "./Link";
import Date from "./Date";
import { MarkdownData } from "../types";

export default class BlogPostItem extends React.Component<{
  node: MarkdownData;
}> {
  hrRef = React.createRef();

  onHover = () => {};

  render() {
    const { node } = this.props;
    return (
      <div key={node.fields.slug} className="mv5">
        <h3 className="ma0 f3">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h3>
        <Date>{node.frontmatter.date}</Date>
        <p
          className="lh-copy near-black"
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
        />
      </div>
    );
  }
}

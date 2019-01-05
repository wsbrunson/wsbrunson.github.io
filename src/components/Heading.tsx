import Link from "gatsby-link";
import * as React from "react";

const MyLink = ({ children }: { children: React.ReactNode }) => (
  <h1 className="pa4 ma0 f1 system-serif">
    <Link className="dark-red link bb bw2" to="/">
      {children}
    </Link>
  </h1>
);

export default MyLink;

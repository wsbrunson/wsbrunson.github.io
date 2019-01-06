import Link from "gatsby-link";
import * as React from "react";

const MyLink = ({ children }: { children: React.ReactNode }) => (
  <h1 className="ma0 f2">
    <Link className="dark-red link" to="/">
      {children}
    </Link>
  </h1>
);

export default MyLink;

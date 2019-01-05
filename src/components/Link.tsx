import Link from "gatsby-link";
import React from "react";

const MyLink = ({
  children,
  to
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <Link className="dark-red link underline-hover" to={to}>
    {children}
  </Link>
);

export default MyLink;

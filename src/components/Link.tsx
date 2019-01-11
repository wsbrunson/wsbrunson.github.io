import Link from "gatsby-link";
import React from "react";

const MyLink = ({
  children,
  to
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <Link className="dark-red link hover-near-black" to={to}>
    {children}
  </Link>
);

export default MyLink;

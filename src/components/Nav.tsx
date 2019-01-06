import React from "react";
import Link from "./Link";

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <li className="ml3">{children}</li>
);

const Nav = () => (
  <ul className="list flex">
    <NavItem>
      <Link to="/">Blog</Link>
    </NavItem>
    <NavItem>
      <Link to="/projects/">Projects</Link>
    </NavItem>
  </ul>
);

export default Nav;

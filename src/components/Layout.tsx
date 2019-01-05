import "prismjs/themes/prism-tomorrow.css";
import "tachyons";
import Heading from "./Heading";
import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <React.Fragment>
    <header>
      <Heading>Shane Brunson</Heading>
    </header>
    <main className="pa4 w-100 h-100 bg-near-white near-black flex flex-column justify-center items-center system-sans-serif">
      <div className="mw7">{children}</div>
    </main>
  </React.Fragment>
);

export default Layout;

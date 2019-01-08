import "prismjs/themes/prism-tomorrow.css";
import "tachyons";
import Heading from "./Heading";
import Nav from "./Nav";
import * as React from "react";
import "./index.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <React.Fragment>
    <header className="h3 mh5-l mh5-m flex justify-between items-center system-sans-serif">
      <Heading>Shane Brunson</Heading>
      <Nav />
    </header>
    <main
      className="mh5-l mh5-m bg-near-white near-black flex flex-column justify-center items-center system-sans-serif"
      style={{ height: "90vh" }}
    >
      <div className="w-100 overflow-y-scroll flex flex-column items-center ">
        <div className="mw7">{children}</div>
      </div>
    </main>
  </React.Fragment>
);

export default Layout;

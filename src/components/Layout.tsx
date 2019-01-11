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
    <header className="system-sans-serif bt bw2 b--dark-red">
      <div className="mh5-l mh5-m flex justify-between items-center mv4">
        <Heading>Shane Brunson</Heading>
        <Nav />
      </div>
    </header>
    <main
      className={`
        flex flex-column items-center justify-center
        shadow-2
        mh5-l mh5-m h-100
        bg-near-white near-black
        system-sans-serif
      `}
    >
      <div className="mw7">{children}</div>
    </main>
  </React.Fragment>
);

export default Layout;

import React from "react";

const Date = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>
    <hr className="w4 mh0 mv2" />
    <small>{children}</small>
  </React.Fragment>
);

export default Date;

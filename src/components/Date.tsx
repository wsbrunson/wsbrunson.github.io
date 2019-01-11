import React from "react";

const Date = React.forwardRef(
  ({ children }: { children: React.ReactNode }, ref) => (
    <React.Fragment>
      <hr ref={ref} className="w4 mh0 mv2 near-black" />
      <small className="near-black">{children}</small>
    </React.Fragment>
  )
);

export default Date;

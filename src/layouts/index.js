import React from "react";
import Link from "gatsby-link";

const blogTitle = "W. Shane Brunson";

class Template extends React.Component {
  getHeader = () =>
    this.props.location.pathname === "/" ? (
      <h1>
        <Link to={"/"}>{blogTitle}</Link>
      </h1>
    ) : (
      <h3>
        <Link to={"/"}>{blogTitle}</Link>
      </h3>
    );

  render() {
    return (
      <div>
        {this.getHeader()}
        {this.props.children()}
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;

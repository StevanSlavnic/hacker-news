import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";

const Header = () => {
  const navLinksRender = () => (
    <React.Fragment>
      <Link to={"/top-stories"}>Top Stories</Link>
    </React.Fragment>
  );

  return (
    <header id="header" className={classes.Header}>
      {/* logo */}
      <Link className={classes.Logo} to={"/news"}>
        Hacker News
      </Link>

      {/* navigation links */}
      <nav className={classes.Nav}>{navLinksRender()}</nav>
    </header>
  );
};

export default Header;

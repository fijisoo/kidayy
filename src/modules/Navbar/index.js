import React, { memo } from "react";
import { Link } from "gatsby";
import Logo from "../../components/Logo";
import CrossText from "../../components/CrossText";

import "./navbar.scss";

const Navbar = memo(({ useHover }) => {
  return (
    <nav className="navbarr" role="navigation" aria-label="main-navigation">
      <div className="navbar-wrapper">
        {/*<div className="navbar-item">*/}
        {/*  <Link className="" to="/about">*/}
        {/*    <CrossText text="HOST" />*/}
        {/*  </Link>*/}
        {/*</div>*/}
        <div className="navbar-brand">
          <Link
            style={{ width: "100%", justifyContent: "center" }}
            to="/"
            className="navbar-item"
            title="Logo"
          >
            <Logo useHover={useHover} />
          </Link>
        </div>
        {/*<div className="navbar-item">*/}
        {/*  <a className="" href="" rel="noopener noreferrer">*/}
        {/*    <CrossText text="BASED" />*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
});

export default Navbar;

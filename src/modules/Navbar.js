import React from "react";
import { Link } from "gatsby";
import Logo from "../components/Logo";
import CrossText from "../components/CrossText";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div
            id="navMenu"
            style={{
              display: "flex",
              height: "140px",
              position: "relative",
              justifyContent: "center",
              alignItems: "center"
            }}
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item link-item" to="/about">
                <CrossText text="HOST" />
              </Link>
            </div>
            <div className="navbar-brand" style={{
              display: "flex",
              position: "absolute",
              justifyContent: "center",
            }}>
              <Link to="/" className="navbar-item" title="Logo">
                <Logo />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >

              </div>
            </div>
            <div className="is-disabled navbar-end has-text-centered">
              <a
                className="navbar-item"
                href=""
                rel="noopener noreferrer"
                style={{
                  visibility: "hidden"
                }}
              >
                <span className="icon">BASED</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

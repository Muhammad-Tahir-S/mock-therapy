import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashLink } from "react-router-hash-link";
import { Breakpoint } from "react-socks";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div>
      <nav className="nav1 pt-3 fixed-top">
        <ul className="mt-3 fixed-top" style={{ listStyleType: "none" }}>
          <li
            style={{ float: "left", textDecoration: "none" }}
            className="px-3 ml-n5"
          >
            <NavLink to="/">
              <img
                alt="home-logo"
                className="mt-n2"
                src="../../logo.png"
                width="220"
                height="50"
              />
            </NavLink>
          </li>

          <Breakpoint large up>
            <div className="real-nav">
              <div>
                <li style={{ float: "right" }} className="mr-2 ml-n2">
                  <NavLink
                    className="btn btn-outline-info d-item d-flex justify-content-center"
                    style={{ textDecoration: "none" }}
                    to="/login"
                  >
                    Log In
                  </NavLink>
                </li>{" "}
              </div>
              <div>
                <li style={{ float: "right" }} className="mr-2 px-2">
                  <NavLink
                    className="btn btn-outline-info d-item d-flex justify-content-center"
                    style={{ textDecoration: "none" }}
                    to="/signup"
                  >
                    {" "}
                    Sign Up{" "}
                  </NavLink>
                </li>{" "}
              </div>
              <div>
                <li style={{ float: "right" }}>
                  <HashLink
                    className="btn btn-outline-info"
                    scroll={(el) => scrollWidthOffset(el)}
                    smooth
                    style={{ textDecoration: "none" }}
                    to="/#about"
                  >
                    About
                  </HashLink>
                </li>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <li style={{ float: "right" }} className="px-2">
                  <HashLink
                    className="btn btn-outline-info"
                    scroll={(el) => scrollWidthOffset(el)}
                    smooth
                    style={{ textDecoration: "none" }}
                    to="/#how-it-works"
                  >
                    How It Works
                  </HashLink>
                </li>
              </div>
            </div>
          </Breakpoint>
          <Breakpoint medium down>
            <nav className="nav2 d-flex justify-content-end mr-3">
              <Dropdown>
                <Dropdown.Toggle variant="outline-info" className="tog-btn">
                  <img
                    src="../../icons8-menu-240.png"
                    width="30"
                    height="40"
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="d-flex justify-content-center">
                    <HashLink
                      scroll={(el) => scrollWidthOffset(el)}
                      to="/#how-it-works"
                    >
                      How It Works
                    </HashLink>{" "}
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex justify-content-center">
                    <HashLink
                      scroll={(el) => scrollWidthOffset(el)}
                      to="/#about"
                    >
                      About
                    </HashLink>{" "}
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink
                      className="d-flex justify-content-center"
                      to="/login"
                    >
                      Log In
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink
                      className="d-flex justify-content-center"
                      to="/signup"
                    >
                      Sign Up
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </nav>
          </Breakpoint>
          
        </ul>
      </nav>
    </div>
  );
}

// import {NavLink} from "react-router-bootstrap";
// <Nav variant="pills" defaultActiveKey="/">
export default Navbar;

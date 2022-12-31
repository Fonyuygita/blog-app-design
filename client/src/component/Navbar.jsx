import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">


      <div className="container">
      <div className="logo">
      <h1>BLOG<span>HOME</span></h1>
      </div>

      <div className="nav-links">
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>

          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>

          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>

          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>

          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>

          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>

          <span>Fonyuy Jude</span>
          <span>logout</span>
          <span className="write">
            <Link to="/write">Write</Link>
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

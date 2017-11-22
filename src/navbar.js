import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="" className="navbar-brand">
            React Strap
          </a>
        </div>
        <div id="navbar">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

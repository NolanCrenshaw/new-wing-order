import React, { useState } from "react";
import { Link } from "react-router-dom";

import Infobar from "./Infobar";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Infobar />
      <nav>
        <div id="link-box">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/store">Store</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/awards">Awards</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

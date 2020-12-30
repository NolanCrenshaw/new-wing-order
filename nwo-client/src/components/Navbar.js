import React, { useState } from "react";
import { Link } from "react-router-dom";

import Infobar from "./Infobar";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <div id="link-box">
          <Link to="/menu">Menu</Link>
          <Link to="/store">Store</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/awards">Awards</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

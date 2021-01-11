import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <div id="link-box">
          <HashLink smooth to="#quickmenu">
            Menu
          </HashLink>
          <HashLink smooth to="#store">
            Store
          </HashLink>
          <Link to="/catering">Catering</Link>
          <HashLink smooth to="#awards">
            Awards
          </HashLink>
          <HashLink smooth to="#contact">
            Contact us
          </HashLink>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Infobar from "./Infobar";

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const handleHamburger = () => setDropMenu(!dropMenu);

  return (
    <div className="navbar-container">
      <Infobar />
      <nav>
        <div
          id="link-box"
          className={`${dropMenu ? "opened-menu" : "closed-menu"}`}
        >
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/store">Store</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/awards">Awards</Link>
        </div>
        {/* <button onClick={handleHamburger} /> */}
      </nav>
    </div>
  );
};
export default Navbar;

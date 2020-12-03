import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const handleHamburger = () => setDropMenu(!dropMenu);

  return (
    <div className="navbar-container">
      <nav>
        <div id="logo-box">
          <img
            src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Head+Logo_Full+Color_White.png"
            alt="Logo Image"
          />
          <img
            src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Ver+Text+Logo_White.png"
            alt="Logo Text"
          />
        </div>
        <div
          id="link-box"
          className={`${dropMenu ? "opened-menu" : "closed-menu"}`}
        >
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/menu">Menu</Link>
          <span>|</span>
          <Link to="/store">Store</Link>
          <span>|</span>
          <Link to="/catering">Catering</Link>
          <span>|</span>
          <Link to="/awards">Awards</Link>
        </div>
        <button onClick={handleHamburger} />
      </nav>
    </div>
  );
};
export default Navbar;

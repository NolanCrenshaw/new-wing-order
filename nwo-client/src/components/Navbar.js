import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const handleHamburger = () => setDropMenu(!dropMenu);

  return (
    <div className="navbar-container">
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
      <div className="contact-bar">
        <span>info@newwingorder.com | 901.747.8893 </span>
        <ul>
          <li>
            <a href="https://www.facebook.com/NewWingOrder/">
              <img src="https://img.icons8.com/material-outlined/48/000000/facebook.png" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/newwingorder/">
              <img src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/newwingorder">
              <img src="https://img.icons8.com/material-outlined/48/000000/twitter.png" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCsJxqotVF1LuhOGeC5YfKpw">
              <img src="https://img.icons8.com/material-outlined/48/000000/youtube--v1.png" />
            </a>
          </li>
        </ul>
      </div>
      <nav>
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
        {/* <button onClick={handleHamburger} /> */}
      </nav>
    </div>
  );
};
export default Navbar;

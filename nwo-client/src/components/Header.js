import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <div>
          <img
            src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Head+Logo_Full+Color_White.png"
            alt="md-Logo-head-white"
          />
          <img
            src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Ver+Text+Logo_White.png"
            alt="md-Logo-text-white"
          />
        </div>
        <span>info@newwingorder.com | 901.747.8893</span>
        <ul>
          <li>
            <img src="https://img.icons8.com/material/48/000000/facebook--v1.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/material/48/000000/instagram-new--v1.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/material/48/000000/twitter-squared.png" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;

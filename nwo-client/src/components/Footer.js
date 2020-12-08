import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <nav>
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
      </nav>
      <div className="footer-credits">
        <a href="https://icons8.com/icon/QV5JEtrTP6nH/fire">
          Fire icon by Icons8
        </a>
        <a href="https://icons8.com/icon/85474/youtube">
          YouTube icon by Icons8
        </a>
        <a href="https://icons8.com/icon/85154/instagram">
          Instagram icon by Icons8
        </a>
        <a href="https://icons8.com/icon/85024/facebook">
          Facebook icon by Icons8
        </a>
        <a href="https://icons8.com/icon/85082/twitter">
          Twitter icon by Icons8
        </a>
      </div>
    </div>
  );
};

export default Footer;

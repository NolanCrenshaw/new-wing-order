import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
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
      <Link id="adminLink" to="/admin">
        Admin
      </Link>
    </div>
  );
};

export default Footer;

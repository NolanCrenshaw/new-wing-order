import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <nav>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/menu">Menu</Link>
        <span>|</span>
        <Link to="/catering">Catering</Link>
        <span>|</span>
        <Link to="/awards">Awards</Link>
        <span>|</span>
        <Link to="/contact">Contact</Link>
      </nav>
      <div>
        <span>info@newwingorder.com | 901.747.8893 </span>
      </div>
    </div>
  );
};

export default Footer;

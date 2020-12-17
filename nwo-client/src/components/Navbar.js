import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const handleHamburger = () => setDropMenu(!dropMenu);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 3 }}
      className="navbar-container"
    >
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
    </motion.div>
  );
};
export default Navbar;

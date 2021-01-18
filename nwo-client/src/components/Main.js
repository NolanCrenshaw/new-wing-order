import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import Landing from "./Landing";
import Location from "./Location";
import Menu from "./Menu";
import Store from "./Store";
import Catering from "./Catering";
import Awards from "./Awards";
import Contact from "./Contact";
import Footer from "./Footer";
import Admin from "./Admin";

const Main = () => {
  // Modal State
  const [adminIsOpen, setAdminIsOpen] = useState(false);

  // Expand State
  const toggleAdmin = () => {
    setAdminIsOpen(!adminIsOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="main-container"
    >
      <Router>
        <Landing />
        <Location />
        <Menu />
        <Awards />
        <Contact />
        <Footer toggleAdmin={toggleAdmin} />
        {adminIsOpen ? <Admin /> : <div />}
      </Router>
    </motion.div>
  );
};

export default Main;

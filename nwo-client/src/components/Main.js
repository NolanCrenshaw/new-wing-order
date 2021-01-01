import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Landing from "./Landing";
import Location from "./Location";
import Menu from "./Menu";
import QuickMenu from "./QuickMenu";
import Store from "./Store";
import Catering from "./Catering";
import Awards from "./Awards";
import Contact from "./Contact";
import Footer from "./Footer";
import Admin from "./Admin";

const Main = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="main-container"
    >
      <Router>
        <Landing />
        <Location />
        <QuickMenu expand={handleExpand} />
        {isExpanded ? <Menu /> : <div className="closed-menu" />}
        <Awards />
        <Contact />
        <Footer />
      </Router>
    </motion.div>
  );
};

export default Main;

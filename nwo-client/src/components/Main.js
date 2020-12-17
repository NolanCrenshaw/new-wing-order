import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Infobar from "./Infobar";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Menu from "./Menu";
import Store from "./Store";
import Catering from "./Catering";
import Awards from "./Awards";
import Contact from "./Contact";
import Footer from "./Footer";
import Admin from "./Admin";

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Router>
        <Infobar />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/menu" component={Menu} />
          <Route path="/store" component={Store} />
          <Route path="/catering" component={Catering} />
          <Route path="/awards" component={Awards} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
        <Footer />
      </Router>
    </motion.div>
  );
};

export default Main;

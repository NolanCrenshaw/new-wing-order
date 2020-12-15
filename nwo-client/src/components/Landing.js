import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Main from "./Main";
import Menu from "./Menu";
import Store from "./Store";
import Catering from "./Catering";
import Awards from "./Awards";
import Contact from "./Contact";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/menu" component={Menu} />
          <Route path="/store" component={Store} />
          <Route path="/catering" component={Catering} />
          <Route path="/awards" component={Awards} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Landing;

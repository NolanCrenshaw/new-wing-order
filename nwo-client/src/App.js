import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Catering from "./components/Catering";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/menu" component={Menu} />
          <Route path="/catering" component={Catering} />
          <Route path="/awards" component={Awards} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Loading from "./components/Loading";
import Landing from "./components/Landing";

// Want to consolidate env files
// import dotenv from "dotenv";
// dotenv.config({ path: "../.env" });

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return <div className="app">{loaded ? <Landing /> : <Loading />}</div>;
};

export default App;

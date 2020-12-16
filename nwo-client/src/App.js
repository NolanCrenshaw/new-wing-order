import React, { useEffect, useState } from "react";

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
    }, 3000);
  }, []);

  return <div className="app">{loaded ? <Landing /> : <Loading />}</div>;
};

export default App;

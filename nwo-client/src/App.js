import React, { useState, useEffect } from "react";

import Main from "./components/Main";
import Loading from "./components/Loading";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadDelay = async () => {
      await setTimeout(() => {
        setLoaded(true);
      }, 3750);
    };
    loadDelay();
  }, []);

  return <>{loaded ? <Main /> : <Loading />}</>;
};

export default App;

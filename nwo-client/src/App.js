import React, { useState, useEffect } from "react";

import Main from "./components/Main";
import Loading from "./components/Loading";

const App = () => {
  // State
  const [isLoaded, setIsLoaded] = useState(false);

  const loadDelay = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3750);
  };

  useEffect(() => {
    // loadDelay();
  }, []);

  // With Intro Animation
  // return <>{isLoaded ? <Main /> : <Loading />}</>;

  // Standard Page Render
  return (
    <div className="app-container">
      <Main />
    </div>
  );
};

export default App;

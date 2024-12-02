import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(!animate);
  };

  return (
    <div className="app">
      <h1 className={`hello-world ${animate ? "animate" : ""}`}>
        Hello, World!
      </h1>
      <button onClick={handleClick}>
        {animate ? "Stop Animation" : "Start Animation"}
      </button>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 1000); // Анімація кожну секунду
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className={`animated-text ${isAnimating ? "animate" : ""}`}>
        Hello World
      </h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

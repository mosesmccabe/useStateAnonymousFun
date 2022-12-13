import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [arr, setArr] = useState(time);

  return (
    <div className="container">
      <h1>{arr}</h1>
      <button
        onClick={() => {
          setInterval(() => {
            const now = new Date().toLocaleTimeString();
            setArr(now);
          }, 1000);
        }}
      >
        Get Time
      </button>
    </div>
  );
}

export default App;

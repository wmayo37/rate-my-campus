import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://duke.edu/" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5352/5352118.png"
            className="logo"
            alt="Campus logo"
          />
        </a>
      </div>
      <h1>Rate My Campus</h1>
      <div className="options">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

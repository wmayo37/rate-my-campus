import { useState } from "react";
import "../Home.css";
import { Link } from "react-router-dom";

function Home() {
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
      <div>
        <Link to="/register" className="signup-link">
          Sign Up
        </Link>
      </div>
    </>
  );
}

export default Home;

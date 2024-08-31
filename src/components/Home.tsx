import React from "react";
import { Link } from "@tanstack/react-router";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link
          to="/$type"
          params={{
            type: "date",
          }}
        >
          <button>Fetch Date</button>
        </Link>
        <Link to="/$type" params={{ type: "ip" }}>
          <button>Fetch IP</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

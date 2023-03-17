import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="landingPage">
      <div>
        <h1> Beat the Bots!</h1>
        <img src="/assets/homeBot.png"></img>
        <h3>
          A team building game to challenge your communication and problem
          solving skills.
        </h3>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

import { Component, useState } from "react";
import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";

import "./battle.css";

function Battle() {
  // code for taking user data and the pass to Bot utils?
  const [botChoice, setBotChocie] = useState("Rock");
  const [userChoice, setUserChoice] = useState("");

  return (
    <div>
      <div className="header">
        <h1>Let's Play!</h1>
      </div>
      <div className="botCard">
        <h3>Taunt for Bot</h3>

        <div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span> ROCK
          </button>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span> PAPER
          </button>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span> SCISSORS
          </button>
          <button type="button" class="btn">
            <strong>ROCK</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
          <button type="button" class="btn">
            <strong>PAPER</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
          <button type="button" class="btn">
            <strong>SCISSORS</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="commentBox">Comments</div>
    </div>
  );
}

export default Battle;

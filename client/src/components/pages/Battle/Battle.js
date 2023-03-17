import { Component, useState } from "react";
import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";

// import {} from './styledComponents'

function Battle() {
  // code for taking user data and the pass to Bot utils?
  const [botChoice, setBotChocie] = useState("Rock");
  const [userChoice, setUserChoice] = useState("");

  const choicesList = [
    {
      id: "ROCK",
      image: "../assets/paper.png",
    },
    {
      id: "SCISSORS",
      image: "",
    },
    {
      id: "PAPER",
      image: "",
    },
  ];

  return (
    <div>
      <div className="header">
        <h1>Let's Play!</h1>
      </div>
      <div className="botCard">
        <h3>Taunt for Bot</h3>
        {choicesList.map((choice) => {
          <button className="btn">{choice.id}</button>;
        })}
      </div>
      <div className="commentBox">Comments</div>
    </div>
  );
}

export default Battle;

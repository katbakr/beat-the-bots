import { Component, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Chat from "../chat/Chat.js";
import { useLocation } from 'react-router-dom';

import "./battle.css";
import io from "socket.io-client";

const socket = io();

export default function Battle() {
  const [botChoice, setBotChoice] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [winnerState, setWinnerState] = useState("No Winner Yet");
  const location = useLocation();
  const { username, room } = location.state;

  const checkWinner = () => {
    if (
      (userChoice === "PAPER" && botChoice === "ROCK") ||
      (userChoice === "ROCK" && botChoice === "SCISSORS") ||
      (userChoice === "SCISSORS" && botChoice === "PAPER")
    ) {
      setWinnerState("Player Wins");
    } else {
      setWinnerState("Robot Wins");
    }
  };

  useEffect(() => {
    socket.emit("join_room", { username, room });
  }, []);

  //this says "re-run the checkWinner() function every time either userChoice or botChoice changes"
  useEffect(() => {
    checkWinner();
  }, [userChoice, botChoice]);

  const handleClick = (choice) => {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    function getRandomChoice() {
      return choices[Math.floor(Math.random() * choices.length)];
    }

    const index = choices.indexOf(botChoice || getRandomChoice());
    const botChoiceIndex = choices[(index + 1) % choices.length];
    setBotChoice(botChoiceIndex);

    setUserChoice(choice);
  };

  return (
    // <div className="base">
    <div
    // className="gameBox"
    // id="display"
    >
      <div>
        <div className="titleContainer">
          <h1 className="battleTitle">Time to Battle!</h1>
          <h1 className="battleTitle">{room}</h1>
        </div>
        <div className="playContainer">
          <div className="botBox">
            <div className="botImg">
              <img src="./assets/bot1.png"></img>
            </div>
            <div className="botCard">
              <h4 className="botTaunt">
                I love rocks. Aren't rocks the coolest?
              </h4>
            </div>
            <div className="userChoices">
              <div className="choice">
                {/* <img src="./assets/rock.png"></img> */}
                {/* <div className="btn1"> */}
                <button
                  className="button"
                  id="rockBtn2"
                  onClick={() => handleClick("ROCK")}
                >
                  ROCK
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                {/* <button
											className="rockBtn"
											onClick={() => handleClick("ROCK")}>
											Ro
										</button> */}
                {/* </div> */}
              </div>
              <div className="choice" id="btn2">
                <button
                  className="button"
                  id="paperBtn2"
                  onClick={() => handleClick("PAPER")}
                >
                  PAPER
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                {/* <img src="./assets/paper.png"></img>
									<div className="btn2">
										<button
											className="paperBtn"
											onClick={() => handleClick("PAPER")}>
											Pa
										</button>
									</div> */}
              </div>
              <div className="choice">
                <button
                  className="button"
                  id="scissorsBtn2"
                  onClick={() => handleClick("SCISSORS")}
                >
                  Scissors
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                {/* <img src="./assets/scissors.png"></img>
									<div className="btn3">
										<button
											className="scissorsBtn"
											onClick={() => handleClick("SCISSORS")}>
											Sc
										</button>
									</div> */}
              </div>
            </div>
          </div>
          <div className="rightColumn">
            <div className="gameStats">
              <h1>Round Results</h1>
              <p>Player chose: {userChoice}</p>
              <p>Bot chose: {botChoice}</p>
              <p>The Winner is: {winnerState}</p>
            </div>
            <div className="chatBox">
              <Chat socket={socket} username={username} room={room} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

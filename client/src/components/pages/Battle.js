import { Component, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Chat from "../chat/Chat.js";
import { useLocation } from "react-router-dom";

import "./battle.css";
import io from "socket.io-client";

const socket = io();

export default function Battle() {
  const [botChoice, setBotChoice] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [winnerState, setWinnerState] = useState("No Winner Yet");
  const [count, setCount] = useState(0);
  const location = useLocation();
  const { username } = location.state;

  const checkWinner = () => {
    if (
      (userChoice === "PAPER" && botChoice === "ROCK") ||
      (userChoice === "ROCK" && botChoice === "SCISSORS") ||
      (userChoice === "SCISSORS" && botChoice === "PAPER")
    ) {
      setWinnerState("Player Wins");
      setCount(count + 1);
    } else {
      setWinnerState("Robot Wins");
      setCount(0);
    }
  };

  const pickABot = (botLogicChoice) => {
    if ("bot3") {
      const messages = [
        "I'm definetly throwing scissors next!",
        "",
        "There's no way you will win this round!",
        "",
        "I'll win this round for sure!",
        "",
        "Can you guess what I'm gonna play?",
        "",
        "Better luck next time!",
        "",
      ];
      const random = messages[Math.floor(Math.random() * messages.length)];
      if (random === "") {
        setBotChoice("PAPER");
      } else {
        setBotChoice("SCISSORS");
      }
    } else if ("bot2") {
      const choices = ["ROCK", "PAPER", "SCISSORS"];
      function getRandomChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
      }
      const index = choices.indexOf(botChoice || getRandomChoice());
      const botChoiceIndex = choices[(index + 1) % choices.length];
      setBotChoice(botChoiceIndex);
    } else {
      setBotChoice("ROCK");
    }
  };

  useEffect(() => {
    socket.emit("join_room", { username, room: "Public" });
  }, []);

  //this says "re-run the checkWinner() function every time either userChoice or botChoice changes"
  useEffect(() => {
    checkWinner();
  }, [userChoice, botChoice]);

  const handleClick = (choice) => {
    pickABot();

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
        </div>
        <div className="playContainer">
          <div className="botBox">
            <div
              className="botImg"
              onClick={() => {
                const array = ["bot1", "bot2", "bot3"];
                const botLogicChoice =
                  array[Math.floor(Math.random() * array.length)];
                pickABot(botLogicChoice);
              }}
            >
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
              <p>Your Consecutive: {count}</p>
            </div>
            <div className="chatBox">
              <Chat socket={socket} username={username} room="Public" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

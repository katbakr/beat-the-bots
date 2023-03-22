import { Component, useState, useEffect } from "react";
//import { useMutation } from "@apollo/client";
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
	const [botLevel, setBotLevel] = useState("./assets/bot1.png");
	const [turn, setTurn] = useState(0);
	const location = useLocation();
	const { username, room } = location.state;

	const checkWinner = () => {
		if (
			(userChoice === "PAPER" && botChoice === "ROCK") ||
			(userChoice === "ROCK" && botChoice === "SCISSORS") ||
			(userChoice === "SCISSORS" && botChoice === "PAPER")
		) {
			setWinnerState("Player Wins");
			setCount(count + 1);
		} else if (
			(userChoice === "PAPER" && botChoice === "PAPER") ||
			(userChoice === "ROCK" && botChoice === "ROCK") ||
			(userChoice === "SCISSORS" && botChoice === "SCISSORS")
		) {
			setWinnerState("You Tied!");
			setCount(0);
		} else {
			setWinnerState("Robot Wins");
			setCount(0);
		}
	};
	//BOT 3
	const bot3 = () => {
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
	};

	//BOT 2
	//random for first throw, then cycles in order
	const bot2 = () => {
		const choices = ["ROCK", "PAPER", "SCISSORS"];
		function getRandomChoice() {
			return choices[Math.floor(Math.random() * choices.length)];
		}
		const index = choices.indexOf(botChoice || getRandomChoice());
		const botChoiceIndex = choices[(index + 1) % choices.length];
		setBotChoice(botChoiceIndex);
	};

	//BOT 1
	const bot1 = () => {
		setBotChoice("ROCK");
	};
	//-------------------

	//Bot 4
	const bot4 = () => {
		setBotChoice(userChoice);
	};
	//-------
	useEffect(() => {
		socket.emit("join_room", { username, room });
	}, []);

	//this says "re-run the checkWinner() function every time turn changes"
	useEffect(() => {
		checkWinner();
	}, [turn]);

	//choosing the level
	const handleClick = (choice) => {
		//if the botLevel state is the bot1.png, then fight bot1
		if (botLevel === "./assets/bot1.png") {
			bot1();
			//if the botLevel state is bot2.png, then fight bot2
		} else if (botLevel === "./assets/botbot.png") {
			bot2();
			//if the botLevel state is bot3.png, then fight bot3
		} else if (botLevel === "./assets/dragonbot.png") {
			bot3();
			//otherwise fight bot4
		} else {
			bot4();
		}
		setUserChoice(choice);
		//after every turn, no matter what bot, and whether or not userChoice or botChoice actuallly updated, update turn to ensure that Checkwinner runs
		setTurn(turn + 1);
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
							{/* 	have a robotlevel button and robotlevel state that affect the image, and bot logic						 */}
							<img src={botLevel}></img>
						</div>
						<div className="botCard">
							<div>
								<button
									className="button"
									onClick={() => {
										setBotLevel("./assets/bot1.png");
									}}>
									Level 1
								</button>
								<button
									className="button"
									onClick={() => {
										setBotLevel("./assets/botbot.png");
									}}>
									Level 2
								</button>
								<button
									className="button"
									onClick={() => {
										setBotLevel("./assets/dragonbot.png");
									}}>
									Level 3
								</button>
								<button
									className="button"
									onClick={() => {
										setBotLevel("./assets/kidbot.png");
									}}>
									Level 4
								</button>
							</div>
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
									onClick={() => handleClick("ROCK")}>
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
							<div
								className="choice"
								id="btn2">
								<button
									className="button"
									id="paperBtn2"
									onClick={() => handleClick("PAPER")}>
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
									onClick={() => handleClick("SCISSORS")}>
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
							<p>Consecutive wins: {count}</p>
						</div>
						<div className="chatBox">
							<Chat
								socket={socket}
								username={username}
								room={room}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
}

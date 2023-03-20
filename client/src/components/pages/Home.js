import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

export default function Home() {

	// const [room, setRoom] = useState('');
	console.log(Auth);
	//if user is logged in, go to the dashboard
	if (Auth.loggedIn()) {
		return (
			<div className="navBtnContainer">
				{" "}
				<li>
					<Link to="/dashboard">
						<button className="homeBtn1">Dashboard</button>
					</Link>
					;
				</li>
				<li>
					<a
						href="/"
						onClick={() => Auth.logout()}>
						<button className="homeBtn2">Logout</button>
					</a>
				</li>
			</div>
		);
	} else {
		return (
			<div>
				{/* // <div className="base">
			// 	<div className="gameBox">
			// 		<div className="displayBox"> */}
				<h1 className="homeTitle"> Beat the Bots!</h1>
				{/* <img className='homeBot' src="/assets/homeBot.png" alt='robot'></img> */}
				<h3>
					A team building game to challenge your communication and problem
					solving skills.<br></br>
					<br></br>
					Login or Sign up to start playing!
				</h3>
				<div className="navBtnContainer">
					<div className="btnOut1">
						<Link to="/signup">
							<button className="homeBtn1">Signup</button>
						</Link>
					</div>

					<div className="btnOut2">
						<Link to="/login">
							<button className="homeBtn2">Login</button>
						</Link>
					</div>
				</div>
				{/* </div>
				</div>
			</div> */}
			</div>
		);
	}
}

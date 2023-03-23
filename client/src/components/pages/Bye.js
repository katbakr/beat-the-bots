import React from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

function Bye() {

	useEffect(() => {
		const timer = setTimeout(() => {
			Auth.logout();
		}, 3500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="byeContainer">
			{" "}
			<div>
				<h1 className="byeTitle">GAME OVER</h1>
				<div className="underline"></div>
				<h3 id="byeH3">Thank you for your playing!</h3>
			</div>
		</div>
	);
}

export default Bye;

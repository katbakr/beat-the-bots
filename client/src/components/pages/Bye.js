import React from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

function Bye() {
	return (
		<div className="gameBox">
			{" "}
			<div>
				<h1 className="homeTitle">Hey!</h1>
				<h3>Thank you for your playing!</h3>
			</div>
		</div>
	);
}

export default Bye;

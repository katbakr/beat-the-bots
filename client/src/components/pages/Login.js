import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
// import './battle.css'

function Login(props) {
	const [formState, setFormState] = useState({ username: "", password: "" });
	const [login, { error }] = useMutation(LOGIN);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const mutationResponse = await login({
				variables: {
					username: formState.username,
					password: formState.password,
				},
			});
			console.log("Hey, the mutation response is:", mutationResponse);
			const token = mutationResponse.data.login.token;
			Auth.login(token);
		} catch (e) {
			console.log(e);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<div className="loginContainer">
			<div>
				<h2 className="lsTitle">Login</h2>
				<form onSubmit={handleFormSubmit}>
					<div className="formContainer">
						<div className="inputContainer">
							<label
								className="inputLabel"
								htmlFor="username">
								Username:{" "}
							</label>
							<input
								className="inputBox"
								placeholder="Billy BotKiller"
								name="username"
								type="text"
								id="username"
								onChange={handleChange}
							/>
						</div>
						<div className="inputContainer">
							<label
								className="inputLabel"
								htmlFor="pwd">
								Password:{" "}
							</label>
							<input
								className="inputBox"
								placeholder="******"
								name="password"
								type="password"
								id="pwd"
								onChange={handleChange}
							/>
						</div>
					</div>
					{error ? (
						<div>
							<p className="error-text">
								The provided credentials are incorrect
							</p>
						</div>
					) : null}
					<div className="navBtns">
						<div>
							<button
								type="submit"
								className="toOther"
								id="loginSubmit">
								<span></span>
								<span></span>
								<span></span>
								<span></span> Submit
							</button>
						</div>
						<div>
							<Link to="/Signup">
								<button
									className="toOther"
									id="loginSubmit">
									Create Account
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;

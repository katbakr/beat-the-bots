import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signupContainer">
      <div>
        <h2 className="suTitle">Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="suFormContainer">
            <div className="inputContainer">
              <label className='suInputLabel' htmlFor="username">Username: </label>
              <input className="suInputBox"
                placeholder="username"
                name="username"
                type="username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <label className='suInputLabel' htmlFor="pwd">Password: </label>
              <input className="suInputBox"
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="navBtns">
            <button type="submit" className="toOther" id='suBtn'>
            Sumbit
              {/* <span></span>
              <span></span>
              <span></span>
              <span></span>  */}
            </button>
            <div>
              <Link to="/Login">
                <button className="toOther" id='suBtn'>
                  Already have an Account?
                  {/* <span></span>
                  <span></span>
                  <span></span>
                  <span></span> */}
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

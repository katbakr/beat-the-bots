import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="landingPage">
      <div class='gameBox'>
      <div class='displayBox'>
        <h1 class='homeTitle'> Beat the Bots!</h1>
        {/* <img class='homeBot' src="/assets/homeBot.png" alt='robot'></img> */}
        <h3>
          A team building game to challenge your communication and problem
          solving skills.<br></br><br></br>
          Login or Sign up to start playing!
        </h3>
      <div class='navBtnContainer'>

        <div class='btnOut1'>
        <Link to="/signup">
        <button class='homeBtn1'>
        Signup
        </button>
        </Link>
        </div>
      
        <div class='btnOut2'>
        <Link to="/login">
        <button class='homeBtn2'>
        Login
        </button>
        </Link>
        </div>


      </div>
      </div>
      </div>
    </div>
  );
}

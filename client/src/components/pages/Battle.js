import { Component, useState } from "react";
import { useMutation } from "@apollo/client";
import Chat from "../chat/Chat.js";
// import MessageForm from '../chat/MessageForm.js'

export default function Battle({ socket }) {
  const [botChoice, setBotChocie] = useState("Rock");
  const [userChoice, setUserChoice] = useState("PAPER");
  const [winner, setWinner] = useState("No Wins");
  // code for taking user data and the pass to Bot utils?
  //need a query and mutation for passing results to user in database, and getting win streak
  const checkWinner = async (botChoice, userChoice) => {
    if (
      (userChoice === "PAPER" && botChoice === "ROCK") ||
      (userChoice === "SCISSORS" && botChoice === "PAPER") ||
      (userChoice === "ROCK" && botChoice === "SCISSORS")
    ) {
      setWinner("Player Wins");
    } else {
      setWinner("Robot Wins");
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    setUserChoice(e.target.value);

    checkWinner(botChoice, userChoice);
  };

// Kat Code =======================================================================================================================
    return (
        <div className="base">
            <div className="gameBox" id='display'>
                <div>
                    <div className="titleContainer">
                        <h1 className="battleTitle">Time to Battle!</h1>
                    </div>
                    <div className='playContainer'>
                        <div className="botBox">
                            <div className='botImg'>
                                <img src='./assets/bot1.png'></img>
                            </div>
                            <div className="botCard">
                                <h3 className="botTaunt">I love rocks. Aren't rocks the coolest?</h3>
                                {/* choicesList={choicesList} */}
                            </div>
                            <div className="userChoices">

                                 <div className="choice">
                                    <img src='./assets/rock.png'></img>
                                    <div className="btn1">
                                    <button className="rockBtn"></button>
                                    </div>
                                </div>
                                <div className="choice" id='btn2'>
                                    <img src='./assets/paper.png'></img>
                                    <div className="btn2">
                                    <button className="paperBtn"></button>
                                    </div>
                                </div>
                                <div className="choice">
                                    <img src='./assets/scissors.png'></img>
                                    <div className="btn3">
                                    <button className="scissorsBtn"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chatBox">
                            < Chat socket={socket} username='horseTeeth' room='room 1' />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
            };
//Matt Code ==================================================================================================================================================
//   // code for taking user data and the pass to Bot utils?
//   //need a query and mutation for passing results to user in database, and getting win streak
//   const [botChoice, setBotChocie] = useState("Rock");
//   const [userChoice, setUserChoice] = useState("");
//   const [winner, setWinner] = useState("");

//   const checkWinner = () => {};

//   return (
//     <div>
//       <div className="header">
//         <h1>Let's Play!</h1>
//       </div>
//       <div className="botCard">
//         <h3>Taunt for Bot</h3>

//         <div>
//           <button>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span> ROCK
//           </button>
//           <button>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span> PAPER
//           </button>
//           <button>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span> SCISSORS
//           </button>
//           <div style={{ display: "flex" }}>
//             <button type="button" class="btn">
//               <strong>ROCK</strong>
//               <div id="container-stars">
//                 <div id="stars"></div>
//               </div>

//               <div id="glow">
//                 <div class="circle"></div>
//                 <div class="circle"></div>
//               </div>
//             </button>
//             <button type="button" class="btn">
//               <strong>PAPER</strong>
//               <div id="container-stars">
//                 <div id="stars"></div>
//               </div>

//               <div id="glow">
//                 <div class="circle"></div>
//                 <div class="circle"></div>
//               </div>
//             </button>
//             <button type="button" class="btn">
//               <strong>SCISSORS</strong>
//               <div id="container-stars">
//                 <div id="stars"></div>
//               </div>

//               <div id="glow">
//                 <div class="circle"></div>
//                 <div class="circle"></div>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="commentBox">Comments</div>
//     </div>
//   );
// }

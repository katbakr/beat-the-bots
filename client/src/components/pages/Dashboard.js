import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import RoomJoinForm from "../chat/RoomJoinForm";

export default function Dashboard({ username }) {

   username = 'junk username';
   // [room, setRoom] = useState('');

   // const navigate = useNavigate();

   // socket.emit = () => {
   //    console.log(`joining room ${room}`)
   // }


   // joins the user's socket client to the serverside room


   return (
      <div className="byeContainer">
         {/* <div className="base">
         <div className='gameBox'>
            <div className='displayBox'> */}
         <h1 className='dashboardTitle'> Hi {username}</h1>
         <div className="rules">
            <h1 className="ruleTitle">How to Play:</h1>
            <ol className="ruleList">
               <li className="rule">
                  Enter a room with your team
               </li>
               <li className="rule">
                  Select Rock, Paper, or Scissors and see how the bot responds!
               </li>
               <li className="rule">
                  Be sure to use the chat to communicate with your teammates to find out the bot's rule.
               </li>
               <li className="rule">
                  Beat the bot 5 times consecutively to move to the next round.
               </li>
            </ol>
         </div>
         <div className='formContainer'>
            {/* <select
               className='roomSelect'
               onChange={(e) => setRoom(e.target.value)}
            >
               <option>--select a room--</option>
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (<option value={`Room ${i}`} key={i}>{`Room ${i}`}</option>))}
            </select> */}
            <Link to='/battle' state={{ username: username }}>
               <button
                  className='dashboardBtn'
               >
                  Join Room
               </button>
            </Link>
         </div>
         {/* </div>
         </div>
      </div> */}
      </div>
   );
}

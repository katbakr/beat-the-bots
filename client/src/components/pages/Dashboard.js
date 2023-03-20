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
      <div>
         {/* <div className="base">
         <div className='gameBox'>
            <div className='displayBox'> */}
         <h1 className='homeTitle'> Hi {username}</h1>

         <div className='formContainer'>
            {/* <select
               className='roomSelect'
               onChange={(e) => setRoom(e.target.value)}
            >
               <option>--select a room--</option>
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (<option value={`Room ${i}`} key={i}>{`Room ${i}`}</option>))}
            </select> */}
            <Link to='/battle' username={username}>
               <button
                  className='btn'
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoomJoinForm from "../chat/RoomJoinForm";

export default function Dashboard({ username, room, setRoom, socket }) {

   username = 'junk username';
   [room, setRoom] = useState('');

   const navigate = useNavigate();

   // joins the user's socket client to the serverside room
   const joinRoom = async () => {
      // room form input must have a value
      if (room !== '') {
         // emits event to socket server w/ user data
         socket.emit('join_room', { username, room });

         // i think redirecting to the battle page from here could work, comment out if not
         navigate('/battle', { replace: true });
      }
   }

   return (
      <div>
      {/* <div className="base">
         <div className='gameBox'>
            <div className='displayBox'> */}
               <h1 className='homeTitle'> Hi {username}</h1>

               <div className='formContainer'>
                  <select
                     className='roomSelect'
                     onChange={(e) => setRoom(e.target.value)}
                  >
                     <option>--select a room--</option>
                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (<option value={`Room ${i}`} key={i}>{`Room ${i}`}</option>))}
                  </select>
                  <button
                     className='btn'
                     onClick={joinRoom}
                  >
                     Join Room
                  </button>
               </div>
            {/* </div>
         </div>
      </div> */}
      </div>
   );
}

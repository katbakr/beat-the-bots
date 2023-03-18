import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoomJoinForm from "../chat/RoomJoinForm";

export default function Dashboard({ username, room, setRoom, socket }) {

   username = 'junk username';
   [room, setRoom] = useState('');

   return (
      <div className="base">
         <div className='gameBox'>
            <div className='displayBox'>
               <h1 className='homeTitle'> Hi {username}</h1>

               <RoomJoinForm username={username} room={room} setRoom={setRoom} socket={socket} />
            </div>
         </div>
      </div>
   );
}

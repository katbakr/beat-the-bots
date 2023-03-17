import React, { useState, useEffect, useRef } from 'react';
import MessageForm from './MessageForm';

/*
required props:
{
   username of current user logged in
   room value from parent component
   the socket instance from running io.connect(the saved socket server url OR `http://localhost/4000`) on the APP element
}
*/
const Chat = ({ username, room, socket }) => {

   // set up array to store message history state
   const [messagesReceived, setMessagesReceived] = useState([]);

   // ref acceses the DOM element for autoscroll
   // CAN REMOVE IF DOESNT INTEGRATE WELL
   const messagesContainerRef = useRef(null);

   // runs whenever a socket event is received from the server
   useEffect(() => {

      // server data format: { message: String, username: String }
      socket.on('receive_message', (data) => {

         console.log(data); // for debug

         // adds newly received message to the end of the messagesReceived array
         setMessagesReceived((state) => [
            ...state,
            {
               message: data.message,
               username: data.username,
            },
         ]);

      });

      // remove socket event listener on component unmount
      return () => socket.off('receive_message');

   }, [socket]);

   // scroll to most recent message whenever we get a new one
   useEffect(() => {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
   }, [messagesReceived]);

   return (
      <div>
         <div className='messagesContainer' ref={messagesContainerRef}>
            {/*  */}
            {messagesReceived.map((msg, i) => (
               <div className='message' key={i}>
                  <p className='messageMeta'>{msg.username}</p>
                  <p className='messageText'>{msg.message}</p>
                  <br />
               </div>
            ))}
         </div>
         <MessageForm username={username} room={room} socket={socket} />
      </div>
   );
};

export default Chat;
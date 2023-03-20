import React, { useState, useEffect, useRef } from 'react';
// import MessageForm from './MessageForm';

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

   const [message, setMessage] = useState('');

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

   const sendMessage = () => {
      // require message to have text
      if (message !== '') {

         console.log({ username, room, message });
         // send message tu server. cant specify who to send it to
         // server will receive message and send it to all users in room including sender
         socket.emit('send_message', { username, room, message });
         // reset message textbox to empty
         setMessage('');
      }
   };

   // scroll to most recent message whenever we get a new one
   useEffect(() => {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
   }, [messagesReceived]);

   return (
      <div>
         <div className='messagesContainer' id='visible-scrollbar' ref={messagesContainerRef}>
            {/*  */}
            {messagesReceived.map((msg, i) => (
               <div className='message' key={i}>
                  <p className='messageMeta'>{msg.username}</p>
                  <p className='messageText'>{msg.message}</p>
                  <br />
               </div>
            ))}
         </div>
         <div className='messageInputContainer'>
            <input
               className='messageInput'
               placeholder='Message...'
               onChange={(e) => setMessage(e.target.value)}
            />
            <button
               className='btn'
               onClick={sendMessage}
            >
               Send
            </button>
         </div>
      </div>
   );
};

export default Chat;
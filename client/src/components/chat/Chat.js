import { useState, useEffect, useRef } from 'react';

/*
required props:
{
   the socket instance from running io.connect(the saved socket server url OR `http://localhost/4000`) on the APP element
}
*/
const Chat = ({ socket }) => {

   // set up array to store message history state
   const [messagesReceived, setMessagesReceived] = useState([]);

   // ref acceses the DOM element for autoscroll
   // CAN REMOVE IF DOESNT INTEGRATE WELL
   const messagesColumnRef = useRef(null);

   // runs whenever a socket event is received from the server
   useEffect(() => {

      // server data format: { message: String, username: String }
      socket.on('recieve_message', (data) => {

         console.log(data); // for debug

         // adds newly recieved message to the end of the messagesReceived array
         setMessagesReceived((state) => [
            ...state,
            {
               message: data.message,
               username: data.username,
            },
         ]);

      });

      // remove socket event listener on component unmount
      return () => socket.off('recieve_message');

   }, [socket]);

   // scroll to most recent message whenever we get a new one
   useEffect(() => {
      messagesColumnRef.current.scrollTop = messagesColumnRef.current.scrollHeight;
   }, [messagesReceived]);

   return (
      <div className='messagesColumn' ref={messagesColumnRef}>
         {/*  */}
         {messagesReceived.map((msg, i) => (
            <div className='message' key={i}>
               <p className='messageMeta'>{msg.username}</p>
               <p className='messageText'>{msg.message}</p>
               <br />
            </div>
         ))}
      </div>
   );
};

export default Chat;
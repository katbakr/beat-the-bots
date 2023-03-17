import { useState } from 'react';

/*
required props:
{
   client's socket instance
   username of current user logged in
   room value from parent component (Chat)
}
*/
const SendMessage = ({ username, room, socket }) => {
   const [message, setMessage] = useState('');

   const sendMessage = () => {
      // require message to have text
      if (message !== '') {
         // send message tu server. cant specify who to send it to
         // server will receive message and send it to all users in room including sender
         socket.emit('send_message', { username, room, message });
         // reset message textbox to empty
         setMessage('');
      }
   };

   return (
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
   );
};

export default SendMessage;
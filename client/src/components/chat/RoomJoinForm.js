import { useNavigate } from 'react-router-dom';

/*
needed props:
{ 
   username of current user logged in
   both [room, setRoom] from running useState in the parent component
   the socket instance from running io.connect(the saved socket server url OR `http://localhost/4000`) on the APP element
}
*/
const RoomJoinForm = ({ username, room, setRoom, socket }) => {

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
      <div className='formContainer'>
         <select
            className='roomSelect'
            onChange={(e) => setRoom(e.target.value)}
         >
            <option>--select a room--</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (<option value={`Room ${i}`}>{`Room ${i}`}</option>))}
         </select>
         <button
            className='btn'
            onClick={joinRoom}
         >
            Join Room
         </button>
      </div>
   )
}

export default RoomJoinForm;
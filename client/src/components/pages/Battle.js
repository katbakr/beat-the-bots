import { Component } from "react";
import { useMutation } from "@apollo/client";
import Chat from '../chat/Chat.js'
// import MessageForm from '../chat/MessageForm.js'

export default function Battle({socket}) {
    // const choicesList = [
    //     {
    //         id: "ROCK",
    //         image: "../assets/paper.png",
    //     },
    //     {
    //         id: "SCISSORS",
    //         image: "",
    //     },
    //     {
    //         id: "PAPER",
    //         image: "",
    //     },
    // ];

    return (
        <div>
            <div class="header">
                <h1>Let's Play!</h1>
            </div>
            <div class="botCard">
                <h3>Taunt for Bot</h3>
                {/* choicesList={choicesList} */}
            </div>
            <div> 
            < Chat socket={socket} ussername='horseTeeth' room='room 1' />
            </div>
        </div>
    );
}


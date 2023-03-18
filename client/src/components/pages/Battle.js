import { Component } from "react";
import { useMutation } from "@apollo/client";
import Chat from '../chat/Chat.js'
// import MessageForm from '../chat/MessageForm.js'

export default function Battle({ socket }) {
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
        <div className="base">
            <div className="gameBox" id='display'>
                <div>
                    <div className="titleContainer">
                        <h1 className="battleTitle">Time to Battle!</h1>
                    </div>
                    <div className='playContainer'>
                        <div className="botBox">
                            <div className='botImg'>
                                <img src='./assets/bot1.png'></img>
                            </div>
                            <div className="botCard">
                                <h3 className="botTaunt">I love rocks. Aren't rocks the coolest?</h3>
                                {/* choicesList={choicesList} */}
                            </div>
                            <div className="userChoices">
                                <div className="choice">
                                    <img src='./assets/rock.png'></img>
                                    <div className="btn1">
                                    <button className="rockBtn"></button>
                                    </div>
                                </div>
                                <div className="choice" id='btn2'>
                                    <img src='./assets/paper.png'></img>
                                    <div className="btn2">
                                    <button className="paperBtn"></button>
                                    </div>
                                </div>
                                <div className="choice">
                                    <img src='./assets/scissors.png'></img>
                                    <div className="btn3">
                                    <button className="scissorsBtn"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chatBox">
                            < Chat socket={socket} username='horseTeeth' room='room 1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


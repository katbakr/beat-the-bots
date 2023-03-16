import { Component } from 'react'
import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";

// import {} from './styledComponents'


function Battle() {

// code for taking user data and the pass to Bot utils?

    const choicesList = [
        {
            id: 'ROCK',
            image:
                '../assets/paper.png',
        },
        {
            id: 'SCISSORS',
            image:
                '',
        },
        {
            id: 'PAPER',
            image:
                '',
        },
    ]



    return (
        <div>
            <div class='header'>
            <h1>Let's Play!
            </h1>
            </div>
            <div class='botCard'>
            <img>{botImg}</img>
            
            <h3>Taunt for Bot</h3>

            choicesList={choicesList}
            </div>
            <div class='commentBox'>
            {/* comments={commentBox} */}
            </div>
        </div>
    )
}

export default Battle
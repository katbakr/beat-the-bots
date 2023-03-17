import { Component } from "react";
import { useMutation } from "@apollo/client";

function Battle() {
    const choicesList = [
        {
            id: "ROCK",
            image: "../assets/paper.png",
        },
        {
            id: "SCISSORS",
            image: "",
        },
        {
            id: "PAPER",
            image: "",
        },
    ];

    return (
        <div>
            <div class="header">
                <h1>Let's Play!</h1>
            </div>
            <div class="botCard">
                <h3>Taunt for Bot</h3>
                choicesList={choicesList}
            </div>
            <div class="commentBox"></div>
        </div>
    );
}

export default Battle;

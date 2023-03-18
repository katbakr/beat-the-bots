//going to need to pull in hooks/add event listeners

const choices = ["ROCK", "PAPER", "SCISSORS"];

const bot1 = (e) => {
  e.preventDefualt();

  const humanChoice = (e) => {
    return e.target.value();
  };
};

const bot2 = (e) => {
  e.preventDefualt();

  //store the users last play in state
  //then the bot choice gets updated to that. give the bot choice state a default value for first turn
  const botChoice = () => {
    //pull last state for human choice
    //return that as setBotChoice
    setBotChoice(userChoice);
  };
  const humanChoice = (e) => {
    return e.target.value();
  };
};

const bot3 = (e) => {
  e.preventDefualt();
  //[] of message and some are blank
  const messages = [
    "I'm definetly throwing scissors next!",
    "",
    "There's no way you will win this round!",
    "",
    "I'll win this round for sure!",
    "",
    "Can you guess what I'm gonna play?",
    "",
    "Better luck next time!",
    "",
  ];
  const humanChoice = (e) => {
    return e.target.value();
  };
  const botChoice = () => {
    //randomly pick an index of the array
    //if "" is paper, otherwise scissors
    const random = messages[Math.floor(Math.random() * messages.length)];
    if (random === "") {
      setBotCHoice("PAPER");
    } else {
      setBotCHoice("SCISSORS");
    }
  };
};

const bot4 = (e) => {
  //round number/id needs to be available
  e.preventDefualt();
  //deconstructed loop (look at codequiz)
  const botChoice = () => {};
  const humanChoice = (e) => {
    return e.target.value();
  };
};

const bot5 = (e) => {
  e.preventDefualt();
  const botChoice = () => {};
  const humanChoice = (e) => {
    return e.target.value();
  };
};

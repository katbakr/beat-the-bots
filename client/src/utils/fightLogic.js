//going to need to pull in hooks/add event listeners

const choices = [rock, paper, scissors];

const bot1 = (e) => {
  e.preventDefualt();
  const botChoice = "rock";
  const humanChoice = (e) => {
    return e.target.value();
  };
};

const bot2 = (e) => {
  e.preventDefualt();

  //store the users last play in state
  //then the bot choice gets updated to that. give the bot choice state a default value for first turn
  const botChoice = () => {};
  const humanChoice = (e) => {
    return e.target.value();
  };
};

const bot3 = (e) => {
  e.preventDefualt();
  //[] of message and some are blank
  //if "" is paper, otherwise scissors
  const humanChoice = (e) => {
    return e.target.value();
  };
  const botChoice = () => {
    //
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

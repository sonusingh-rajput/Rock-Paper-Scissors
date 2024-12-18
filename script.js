const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissor = document.querySelector(".scissors-btn");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const userHandIcon = document.querySelector(".user-hand > .hand-icon");
const computerHandIcon = document.querySelector(".computer-hand > .hand-icon");
const result = document.querySelector(".result");

const rockIcon = "✊";
const paperIcon = "🤚";
const scissorIcon = "✌️";

let userWinScore = 1;
let computerwinScore = 1;

const iconList = [rockIcon, paperIcon, scissorIcon];

rock.addEventListener("click", () => {
    result.innerHTML = "";
  userHandIcon.innerHTML = "🤜";
  computerHandIcon.innerHTML = "🤛";
  userHandIcon.classList.add("shakeUserHands");
  computerHandIcon.classList.add("shakeComputerHands");
  setTimeout(() => {
    userHandIcon.classList.remove("shakeUserHands");
    computerHandIcon.classList.remove("shakeComputerHands");
    userHandIcon.innerHTML = rockIcon;
    const num = Math.floor(Math.random() * 3);
    computerHandIcon.innerHTML = iconList[num];
    if (computerHandIcon.innerText === userHandIcon.innerText) {
      result.innerHTML = "Draw";
    } else if (computerHandIcon.innerText === paperIcon) {        
      result.innerHTML = "Computer Win!!";
      computerScore.innerText = computerwinScore
      computerwinScore++
    } else {
      result.innerHTML = "You Won!!";
      userScore.innerText = userWinScore;
      userWinScore++
    }
  }, 2000);
});

paper.addEventListener("click", () => {
    result.innerHTML = "";
  userHandIcon.innerHTML = "🤜";
  computerHandIcon.innerHTML = "🤛";
  userHandIcon.classList.add("shakeUserHands");
  computerHandIcon.classList.add("shakeComputerHands");
  setTimeout(() => {
    userHandIcon.classList.remove("shakeUserHands");
    computerHandIcon.classList.remove("shakeComputerHands");
    userHandIcon.innerHTML = paperIcon;
    const num = Math.floor(Math.random() * 3);
    computerHandIcon.innerHTML = iconList[num];
    if (computerHandIcon.innerText === userHandIcon.innerText) {
      result.innerHTML = "Draw";
    } else if (computerHandIcon.innerText === scissorIcon) {
      result.innerHTML = "Computer Win!!";
      computerScore.innerText = computerwinScore
      computerwinScore++
    } else {
      result.innerHTML = "You Won!!";
      userScore.innerText = userWinScore;
      userWinScore++
    }
  }, 2000);
});

scissor.addEventListener("click", () => {
    result.innerHTML = "";
  userHandIcon.innerHTML = "🤜";
  computerHandIcon.innerHTML = "🤛";
  userHandIcon.classList.add("shakeUserHands");
  computerHandIcon.classList.add("shakeComputerHands");
  setTimeout(() => {
    userHandIcon.classList.remove("shakeUserHands");
    computerHandIcon.classList.remove("shakeComputerHands");
    userHandIcon.innerHTML = scissorIcon;
    const num = Math.floor(Math.random() * 3);
    computerHandIcon.innerHTML = iconList[num];
    if (computerHandIcon.innerText === userHandIcon.innerText) {
      result.innerHTML = "Draw";
    } else if (computerHandIcon.innerText === rockIcon) {
      result.innerHTML = "Computer Win!!";
      computerScore.innerText = computerwinScore
      computerwinScore++
    } else {
      result.innerHTML = "You Won!!";
      userScore.innerText = userWinScore;
      userWinScore++
    }
  }, 2000);
});

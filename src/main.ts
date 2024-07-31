const display = document.querySelector("#display") as HTMLElement;
const buttons = document.querySelectorAll("#btn1");
const uChose = document.querySelector("#my") as HTMLElement;
const cChose = document.querySelector("#random") as HTMLElement;
const guess = document.querySelector("#answer") as HTMLButtonElement;
const high_low = document.querySelector("#hi-lo") as HTMLElement;

let userChoice: number;
let computerChoice;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target instanceof HTMLElement) {
      userChoice = parseInt(e.target.innerText);
      uChose.innerText = `You Chose :${userChoice}`;
    }
  });
});
guess.addEventListener("click", () => {
  const min = 1;
  const max = 10;
  let guess = Math.floor(Math.random() * (max - min + 1) + min);
  computerChoice = guess;
  cChose.innerText = `Computer Chose :${computerChoice}`;
  if (computerChoice == userChoice) {
    display.innerText = "Win";
    display.style.color = "#22c55e";
    high_low.textContent = "Your Guess Number is Write";
    high_low.style.color = "#22c55e";
  } else if (computerChoice > userChoice) {
    display.innerText = "Loss";
    display.style.color = "red";
    high_low.textContent = "Your Guess Number is too High!";
    high_low.style.color = "red";
  } else if (computerChoice < userChoice) {
    display.innerText = "Loss";
    display.style.color = "red";
    high_low.textContent = "Your Guess Number is too Low!";
    high_low.style.color = "red";
  }
});

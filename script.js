const janken = ["Rock", "Paper", "Scissors"];
let psWin = 0;
let csWin = 0;

function computerPlay() {
  let cp = janken[Math.floor(Math.random() * 3)];
  return cp;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let ps = capitalize(playerSelection);
  let cs = computerSelection;
  if ((ps == "Rock" && cs == "Scissors") || (ps == "Paper" && cs == "Rock") || (ps == "Scissors" && cs == "Paper")) {
    psWin++;
    return `You Win! ${ps} beats ${cs}`;
  } else if (ps == cs) {
    return "It's a tie";
  } else {
    csWin++;
    return `You Lose... ${cs} beats ${ps}`;
  }
}

function game() {
  let round = 0;
  while(round < 5) {
    let playerSelection = prompt("What's your hand?: Rock, Paper, Scissors");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    round++;
  }
  whosWin(psWin, csWin);
}

function whosWin(n1, n2) {
  let message = document.getElementById("m");
  if (n1 > n2) {
    message.innerHTML = `You are a WINNER <br>player ${n1} - computer ${n2} - tie ${5 - n1 - n2}`;
  } else if (n1 < n2) {
    message.innerHTML = `You are a LOSER... <br>player ${n1} - computer ${n2} - tie ${5 - n1 - n2}`;
  } else {
    message.innerHTML = `OK. It's a tie. <br>player ${n1} - computer ${n2} - tie ${5 - n1 - n2}`;
  }
}

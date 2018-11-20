var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.getElementById("scores");
var result_p       = document.querySelector(".result > p");
var rock_div       = document.getElementById("r");
var paper_div      = document.getElementById("p");
var scissors_div   = document.getElementById("s");

var smallUserWord = "user".fontsize(3).sub();
var smallCompWord = "comp".fontsize(3).sub();

function getword(id){
    if(id == "r") return "Rock";
    else if (id == "p") return "Paper";
    else return "Scissors";
}

function getComputerChoice() {
    var choices = ["p", "r", "s"];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    var userChoice_div = document.getElementById(user);
    result_p.innerHTML       = getword(user) + smallUserWord + " beats " + getword(comp) + smallCompWord + ". You win. 🔥";
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(user, comp) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    var userChoice_div = document.getElementById(user);
    result_p.innerHTML       = getword(user) + smallUserWord + " loses to " + getword(comp) + smallCompWord + ". You lost. 💩";
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(user, comp) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    var userChoice_div = document.getElementById(user);
    result_p.innerHTML       = getword(user) + smallUserWord + " draws with " + getword(comp) + smallCompWord + ".";
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {

    
    var compChoice = getComputerChoice();
    
    switch(userChoice + compChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, compChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, compChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, compChoice);
        break;
    }
}
  
function main() {
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));
}

main();
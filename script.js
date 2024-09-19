let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usrscr = document.querySelector("#user-score");
const botscr = document.querySelector("#bot-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore += 1;
        msg.innerText = `You Won! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        usrscr.innerText = userscore;
    }
    else {
        msg.innerText = `You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore += 1;
        botscr.innerText = compscore;
    }
};

const drawgame = () => {
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "black";
}

const playgame = (userchoice) => {
    // generate computer choice
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
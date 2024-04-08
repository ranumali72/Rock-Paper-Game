const choices=['rock','paper','scissors'];
const playerDisplay=document.getElementById("playerDisplay");
const computerrDisplay=document.getElementById("computerrDisplay");
const resultDisplay=document.getElementById("resultDisplay");
function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice){
        result="IT`S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissors")?"YOU WIN 🤗":"YOU LOOSE!😢"
                break;
            case "paper":
                result=(computerChoice==="rock") ? "YOU WIN 🤗":"YOU LOOSE!😢"
                break;
            
            case "scissors":
                result=(computerChoice==="paper")?"YOU WIN 🤗":"YOU LOOSE!😢"
                break;
            }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;
}
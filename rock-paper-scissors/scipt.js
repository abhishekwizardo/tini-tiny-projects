let val = Math.floor(Math.random()*3); 

const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper"); 
const scissor = document.getElementById("scissor"); 
const bot_choice = document.getElementById("bot-choice"); 
const result = document.getElementById("result"); 
const your_score = document.getElementById("your-score"); 
const bot_score = document.getElementById("bot-score"); 
const rounds = document.getElementById("rounds"); 

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");
const nextGame = document.getElementById("next-game");

let gameOver = false;

function showPopup(won) {
    gameOver = true;

    popupTitle.textContent = won ? "YOU WIN!" : "YOU LOSE!";
    popupMessage.textContent = won
        ? "GG! You defeated the computer!"
        : "The computer won. Run it back!";

    popup.classList.remove("hidden");
}

nextGame.addEventListener("click", () => {

    
    game.score = 0; 
    game.bot = 0; 
    game.rounds = 0; 

    document.getElementById("your-score").textContent = "Your score: 0";
    document.getElementById("bot-score").textContent = "Computer score: 0";
    document.getElementById("rounds").textContent = "Rounds: 0";
    document.getElementById("result").textContent = "Lock in!";
    document.getElementById("bot-choice").textContent = "The computer is thinking...";

    popup.classList.add("hidden");
});

let game = {
    score : 0,  
    bot : 0,
    rounds: 0 
}; 

function res(game){

    your_score.textContent ="your score : " +  game.score; 
    bot_score.textContent = "bot's score : " + game.bot; 
    rounds.textContent = "total rounds : " + game.rounds; 


    if(game.score === 5 || game.bot === 5){

        if(game.score===5){
            showPopup(1); 
        }
        else showPopup(0);      
    }


}

let choices = ["rock", "paper", "scissors"]; 

function guard(x){

    let val = Math.floor(Math.random()*3); 

    bot_choice.textContent = "THE BOT CHOSE : " + choices[val]; 
    

    if(x===0){

        if(val === 0){
            result.textContent =  "It's a Tie, go again!"; 
        }
        else if(val == 1){

            result.textContent =  "You Lose this round, your rock was wrapped"; 
            game.bot++; 

        }
        else{

            result.textContent =  "You Win this round, Yourcrushed those Scissors Rock!"; 
            game.score++; 

        }
        game.rounds++; 

       res(game); 
        
    }
    else if(x===1){


        if(val === 0){

            result.textContent =  "You win the round, your paper wrapped the Rock!"; 
            game.score++; 
        }
        else if(val == 1){

            result.textContent =  "It's a tie, Go again!"; 

        }
        else{

            result.textContent =  "You lost the round and got scissored!"; 
            game.bot++; 

        }
        game.rounds++; 
        res(game); 
    }
    else{
        if(val === 0){

            result.textContent =  "You lose the round, Rock beats Scissors!"; 
            game.bot++; 

        }
        else if(val == 1){

            result.textContent =  "You win the round, You scissored the papers"; 
            game.score++; 

        }
        else{

            result.textContent =  "It's a Tie, Go again!"; 

        }

        game.rounds++; 
        res(game); 
    }

}

rock.addEventListener("click", () => guard(0)); 
paper.addEventListener("click", () => guard(1)); 
scissor.addEventListener("click", () => guard(2)); 




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

const winnn = new Audio("sounds/minecraft_fireworks.mp3");
const losss = new Audio("sounds/minecraft_damage.mp3");  
const tieee = new Audio("sounds/minecraft-click_cO1q3AEI.mp3"); 
const victory = new Audio("sounds/emand_edroff-victory-bell-success-fanfare-576275 (1).mp3"); 
const defeat = new Audio("sounds/freesound_community-failure-1-89170.mp3"); 
winnn.preload = "auto"; 
losss.preload = "auto"; 
tieee.preload = "auto"; 
victory.preload = "auto"; 
defeat.preload = "auto"; 

let gameOver = false;

function showPopup(won) {
    gameOver = true;

    popupTitle.textContent = won ? "YOU WIN!" : "YOU LOSE!";
    if(won){
        victory.currentTime= 0 ; 
        victory.play();
    } 
    else{
        defeat.currentTime = 0; 
        defeat.play(); 
    }
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
            tieee.currentTime = 0; 
            tieee.play(); 
        }
        else if(val == 1){

            result.textContent =  "You Lose this round, your rock was wrapped"; 
            game.bot++; 
            losss.currentTime = 0; 
            losss.play(); 

        }
        else{

            result.textContent =  "You Win this round, Yourcrushed those Scissors Rock!"; 
            winnn.currentTime = 0; 
            winnn.play(); 
            game.score++; 

        }
        game.rounds++; 

       res(game); 
        
    }
    else if(x===1){


        if(val === 0){

            result.textContent =  "You win the round, your paper wrapped the Rock!"; 
            game.score++; 
            winnn.currentTime = 0; 
            winnn.play(); 
        }
        else if(val == 1){

            result.textContent =  "It's a tie, Go again!"; 
            tieee.currentTime = 0; 
            tieee.play(); 
        }
        else{

            result.textContent =  "You lost the round and got scissored!"; 
            game.bot++; 
             losss.currentTime = 0; 
            losss.play(); 

        }
        game.rounds++; 
        res(game); 
    }
    else{
        if(val === 0){

            result.textContent =  "You lose the round, Rock beats Scissors!"; 
            game.bot++; 
            losss.currentTime = 0; 
            losss.play(); 

        }
        else if(val == 1){

            result.textContent =  "You win the round, You scissored the papers"; 
            game.score++; 
            winnn.currentTime = 0; 
            winnn.play(); 

        }
        else{

            result.textContent =  "It's a Tie, Go again!"; 
            tieee.currentTime = 0; 
            tieee.play(); 
        }

        game.rounds++; 
        res(game); 
    }

}

rock.addEventListener("click", () => guard(0)); 
paper.addEventListener("click", () => guard(1)); 
scissor.addEventListener("click", () => guard(2)); 




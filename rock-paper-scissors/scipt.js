let val = Math.floor(Math.random()*3); 

const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper"); 
const scissor = document.getElementById("scissor"); 
const result = document.getElementById("result"); 

let val2 = 0, score = 0, tries = 0;

rock.addEventListener("click", function(){

    val = Math.floor(Math.random()*3); 

    console.log(val); 

    if(val === 0){
        result.textContent = "YAY YOU WON ! THE COMPUTER ALSO CHOSE STONE";
        score++; 
    }
    else if(val === 2) {
        result.textContent = "OH NO, YOU LOSE ! THE COMPUTER CHOSE PAPER"; 
    }
    else{
        result.textContent = "OH NO, YOU LOSE ! THE COMPUTER CHOSE SCISSORS"; 
    }

    tries++; 

}); 

paper.addEventListener("click", function(){
    
    val = Math.floor(Math.random()*3); 

     console.log(val); 

    if(val === 2){
        result.textContent = "YAY YOU WON ! THE COMPUTER ALSO CHOSE PAPER"; 
        score++; 
    }
    else if(val === 0) {
        result.textContent = "OH NO, YOU LOSE ! THE COMPUTER CHOSE STONE"; 
    }
    else{
        result.textContent = "OH NO, YOU LOSE ! THE COMPUTER CHOSE SCISSORS"; 
    }

    tries++; 
}); 

scissor.addEventListener("click", function(){
    
    val = Math.floor(Math.floor(Math.random()*3)); 

     console.log(val); 

    if(val === 1){
        result.textContent = "YAY YOU WON ! THE COMPUTER ALSO CHOSE SCISSORS"; 
        score++; 
    }
    else if(val === 0) {
        result.textContent = "OH NO, YOU LOSE ! THE COMPUTER CHOSE STONE"; 
    }
    else{
        result.textContent = "OH NO, YOU LOSE ! THE COMPUTER CHOSE SCISSORS"; 
    }

    tries++; 
}); 

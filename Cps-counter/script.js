
const a = document.getElementById("btn");

const b = document.getElementById("eight")

let c = 0; 

const d = ["one", "two","three","four", "five", "more than 5", "more than 5", "more than 5", "more than 5", "more than 5", "more than 5", "surely more than 5"]; 

a.addEventListener("contextmenu", function(){

    b.textContent = numberToWords.toWords(c); 
    c++; 

}); 

a.addEventListener("click", function(){

    b.textContent = numberToWords.toWords(c); 
    c++; 

}); 
a.addEventListener("auxclick", function(){

    b.textContent = numberToWords.toWords(c); 
    c++; 

}); 
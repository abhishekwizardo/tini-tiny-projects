let timer = 30; 

const star = document.getElementById("btn2"); 

const reset = document.getElementById("btn1"); 

const time = document.getElementById("countdown")

const bar = document.getElementById("bar"); 

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

star.addEventListener("click", async function(){

    if(star.textContent==="start") star.textContent = "stop"; 
    else{
        star.textContent= "start"; 
        return; 
    }

    for(let i = 30; i>=0; i--){

        time.textContent = i;
        bar.style.width = ((100/30)*i) + "%";   

        await sleep(1000); 

    }

}); 


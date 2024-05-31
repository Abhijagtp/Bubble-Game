var timer = 31;
var score = 0;
var hitnum = 0;


function scoreplus(){
    score += 10;
    document.querySelector("#scoreval").textContent = score ;
}

document.querySelector(".btm").addEventListener ("click",function(dets){
    clickednum = Number(dets.target.textContent);
    if(clickednum == hitnum){
        scoreplus();
        randomhit();
        bubblesbana();
    }
})

function bubblesbana(){
var bubbles = ""
for(var i=1;i<=144;i++ ){
    var rn = Math.floor(Math.random()*10)
    bubbles += `<div class="bubble">${rn}</div>`
}

document.querySelector(".btm").innerHTML = bubbles
}

document.querySelector("#timerval").addEventListener("click",function(){
    settimer();
    randomhit();
})
function settimer(){
    var inttimer = setInterval(function() {
        if (timer>0){
        timer --;
        document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(inttimer);
            document.querySelector(".btm").innerHTML =`<h1>Time Out</h1>`;

        }
    },1000)
    

}

function randomhit(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent = hitnum;
    
}
// randomhit();
bubblesbana();
// settimer();

 

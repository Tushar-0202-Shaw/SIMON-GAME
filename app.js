let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","purple"];

let gameStarted = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(gameStarted == false){
        console.log("Game is started")
        gameStarted = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250); 
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let rndIdx = Math.floor(Math.random()*3);
    let rndColor = btns[rndIdx];
    let rndBtn = document.querySelector(`.${rndColor}`);
    // console.log(rndIdx);
    // console.log(rndColor);
    // console.log(rndBtn);
    gameSeq.push(rndColor);
    console.log(gameSeq);
    btnFlash(rndBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameStarted = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
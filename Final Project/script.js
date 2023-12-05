const $ = selector => document.querySelector(selector);

var mineField = [];

var rows;
var columns;

var numMines;
var minesLocation = [];

var tilesRevealed = 0;
var gameOver = false;


function setDifficulty(){
    document.getElementById("easyBtn").addEventListener("click", function(){
        rows = 9;
        columns = 9;
        numMines = 10;
        document.getElementById("mineField").style.height = 450 + "px";
        document.getElementById("mineField").style.width = 450 + "px";
        startGame();
        setMines();
        setTimer();
    })
    document.getElementById("mediumBtn").addEventListener("click", function(){
        rows = 16;
        columns = 16;
        numMines = 40;
        document.getElementById("mineField").style.height = 800 + "px";
        document.getElementById("mineField").style.width = 800 + "px";
        startGame();
        setMines();
        setTimer();
    })
    document.getElementById("hardBtn").addEventListener("click", function(){
        rows = 30;
        columns = 16;
        numMines = 99;
        document.getElementById("mineField").style.height = 1500 + "px";
        document.getElementById("mineField").style.width = 800 + "px";
        startGame();
        setMines();
        setTimer();
    })
   

}


function startGame(){
    document.getElementById("tilesRevealed").innerHTML = tilesRevealed;

    for(let r = 0; r < rows; r++) {
        let row = [];
        for(let c = 0; c < columns; c++){
            let square = document.createElement("div");
            square.id = r.toString() + "-" + c.toString();
            square.addEventListener("click", squareClicked)
            square.addEventListener("contextmenu", flagSquare)
            document.getElementById("mineField").append(square);
            row.push(square);
        }
        mineField.push(row);
        
    }
}

function squareClicked(){

    if(gameOver || this.classList.contains("clicked")){
        return;
    };

    
    if(minesLocation.includes(this.id)){
        alert("GAME OVER");
        gameOver = true;
        revealMines();
    }

    let coordinates = this.id.split("-");
    let r = parseInt(coordinates[0]);
    let c = parseInt(coordinates[1]);
    checkMine(r, c );
}

function checkMine(r, c){
    if(r < 0 || r >= rows || c < 0 || c >= columns){
        return;
    }
    if(mineField[r][c].classList.contains('clicked')){
        return;
    }

    mineField[r][c].classList.add('clicked');
    tilesRevealed +=1;
    document.getElementById("tilesRevealed").innerHTML = tilesRevealed;

    var minesFound = 0;

    minesFound += checkTile(r-1, c-1);
    minesFound += checkTile(r-1, c);
    minesFound += checkTile(r-1, c+1);
    minesFound += checkTile(r, c-1);
    minesFound += checkTile(r, c+1);
    minesFound += checkTile(r+1, c-1);
    minesFound += checkTile(r+1, c);
    minesFound += checkTile(r+1, c+1);
    

    if(minesFound > 0){
        mineField[r][c].innerText = minesFound;
    } else{
        checkMine(r-1, c-1);
        checkMine(r-1, c);
        checkMine(r-1, c+1);
        checkMine(r, c-1);
        checkMine(r, c+1);
        checkMine(r+1, c-1);
        checkMine(r+1, c);
        checkMine(r+1, c+1);
    }

    if (tilesRevealed == rows * columns - numMines){
        alert('You won!')
        gameOver = true;
    }
}

function checkTile(r, c){
    if(r < 0 || r >= rows || c < 0 || c >= columns){
        return 0;
    }

    if (minesLocation.includes(r.toString() + "-" + c.toString())) {
        return 1;
    }

    return 0;

}

function revealMines(){
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            let square = mineField[r][c];
            if(minesLocation.includes(square.id)){
                square.innerText = "💣";
                square.style.backgroundColor = "red";
                gameOver = true;
            }
        }
    }
    document.getElementById("playAgainBtn").style.display = "block"
}



function flagSquare(){
    if(this.classList.contains("clicked") || gameOver){
        return;       
    } else { 
        if(this.innerText == ""){
            this.innerText = "🚩"
        }
        else if(this.innerText == "🚩"){
            this.innerText = "";
        }
    }
}

function setMines(){
    let minesLeft = numMines;
    while (minesLeft > 0){
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = r.toString() + "-" + c.toString();

        if(!minesLocation.includes(id)){
            minesLocation.push(id);
            minesLeft -= 1;
        }
    }
}

var intervalId;

function setTimer() {
    var timerElement = document.getElementById("timer");

    var timer = parseInt(timerElement.innerText) || 0;
    intervalId = setInterval(function () {
        if (!gameOver) {
            timer++;
            document.getElementById("timer").innerText = timer;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}



document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("playAgainBtn").addEventListener("click", function(){
        location.reload();
    })
    document.getElementById("tilesRevealed").innerHTML = tilesRevealed;
    setDifficulty();
});

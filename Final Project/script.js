const $ = selector => document.querySelector(selector);

var mineField = [];

var rows = 9;
var columns = 9;

var numMines = 10
var minesLocation = [];

var tilesRevealed = 0;

var flagEnabled = false;

var gameOver = false;

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
console.log(mineField)
}

function squareClicked(){

    if(gameOver || this.classList.contains("clicked")){
        return;
    };

    if(flagEnabled){
        if(this.innerText == ""){
            this.innerText = "🚩"
        }
        else if(this.innerText == "🚩"){
            this.innerText = "";
        }
        return;
    }
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
            }
        }
    }
}

// function toggleFlag(){
//     if(flagEnabled){
//         flagEnabled = false;
//         document.getElementById("flagBtn").style.backgroundColor = "lightGray";
//     } else {
//         flagEnabled = true;
//         document.getElementById("flagBtn").style.backgroundColor = "darkGray";
//     }
// }

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

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("tilesRevealed").innerHTML = tilesRevealed;
    startGame();
    setMines();
});

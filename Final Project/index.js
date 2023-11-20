const $ = selector => document.querySelector(selector);


function squareMaker(squareRows, squareCols) {

    
    let squareCode = "<table>"

    for (let i = 0; i < squareRows; i++){
        squareCode += "<tr>";
        for (let j = 0; j < squareCols; j++){
            squareCode +=  '<td><button class= "square"></button></td>';
        }
        squareCode += "</tr>";
    }
    squareCode += "</table>";
    document.getElementById("squares").innerHTML = squareCode;
};

const easy = document.getElementById("easyBtn");
const medium = document.getElementById("mediumBtn");
const hard = document.getElementById("hardBtn");
document.addEventListener("DOMContentLoaded", () => {
    const easy = document.getElementById("easyBtn");
    const medium = document.getElementById("mediumBtn");
    const hard = document.getElementById("hardBtn");

    easy.addEventListener("click", function() {
        squareMaker(9, 9);
    })

    medium.addEventListener("click", function() {
        squareMaker(16, 16);
    })

    hard.addEventListener("click", function() {
        squareMaker(16, 30);
    })
   
})
const $ = selector => document.querySelector(selector);

const colourArray = ["white", "red", "orange", "yellow", "green", "blue", "violet", "black"]
const buttons = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]


document.addEventListener("DOMContentLoaded", function () {
    const coloursDiv = document.getElementById("colours");

    for (row of buttons) {
        for (item of row) {
            const node = document.createElement("button");
            node.textContent = "#";
            node.value = item;
            node.style.fontFamily = 'Courier New, monospace';

            const initialBackgroundColor = "white"; // Set the initial background color to white
            node.style.backgroundColor = initialBackgroundColor;

            let colorIndex = 0; // Initialize the color index for each button

            node.addEventListener("mouseenter", function () {
                if (colorIndex < colourArray.length) {
                    this.style.backgroundColor = colourArray[colorIndex]; // Change to the current color
                    colorIndex++; // Increment the color index
                }

        
            });

            node.addEventListener("click", function(){
                if (colorIndex == colourArray.length) {
                    colorIndex = 0;
                    this.style.backgroundColor = colourArray[colorIndex];
                }
            })

            coloursDiv.appendChild(node);
        }

        coloursDiv.appendChild(document.createElement("br"));
    }

    coloursDiv.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "lightgrey";
    });

    coloursDiv.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "white";
    });
});














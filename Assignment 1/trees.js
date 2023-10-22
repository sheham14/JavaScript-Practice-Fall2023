
function fullTree(height){

    let text = "";
    for (let i = 1; i<= height; i++) {
        let spaces = " ".repeat(height - i);
        let stars = "*".repeat(2 * i - 1);
        text += spaces + stars + "\n";
    }

    return text;
}


function rightTree(height){
    let text = "";
    for (let i = 1; i <= height; i++){
        let spaces = " ".repeat(height - i);
        let stars = "*".repeat(i);
        text += stars + spaces + "\n";
    }

    return text;
}


function leftTree(height) {
    let text = "";
    for (i = 1; i <= height; i++) {
        let spaces = " ".repeat(height - i);
        let stars = "*".repeat(i);
        text += spaces + stars + "\n";
    }

    return text;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("grow").addEventListener("click", function() {
        let height = parseInt(document.getElementById("height").value);
        let treeType = document.getElementById("treeType").value;
        let forest = document.getElementById("forest");
        let treeShape = "";

        if (treeType === "full"){
            treeShape = fullTree(height);
        } else if (treeType === "right"){
            treeShape = rightTree(height);
        }else if (treeType === "left"){
            treeShape = leftTree(height);
        }

        forest.innerHTML = treeShape;


    });
});




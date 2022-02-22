const canvas = document.querySelector("#canvas");
let num = 50;

function xd(){
    alert("H");
}

for (x = 1; x <= num; x++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (i = 1; i <= num; i++) {
        const canvasSquare = document.createElement("div");
        canvasSquare.classList.add("square");
        canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClicked");
        row.appendChild(canvasSquare);
    };
    canvas.appendChild(row);
};

const numOfSquares = document.querySelector("#numOfSquares");
numOfSquares.addEventListener("click", changeSquares);

function changeSquares() {
    let num = prompt("How many squares do you want in a row/column?");
    canvas.textContent = "";
    for (x = 1; x <= num; x++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (i = 1; i <= num; i++) {
            const canvasSquare = document.createElement("div");
            canvasSquare.classList.add("square");
            canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClicked");
            row.appendChild(canvasSquare);
        };
        canvas.appendChild(row);
    };
}

function resetCanvas(){
    const canvasSquare = document.querySelectorAll(".square");
    for (const square of canvasSquare) {
        square.classList.remove("squareClicked");
    }
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetCanvas);

function toggleEraser(){
    const canvasSquare = document.querySelectorAll(".square");
    togglePenBTN.style.background = "";
    toggleEraserBTN.style.background = "#ABB0B0";
    for (const square of canvasSquare) {
        square.onmouseover = () => square.classList.remove("squareClicked");
    }
}

const toggleEraserBTN = document.querySelector("#toggleEraser");
toggleEraserBTN.addEventListener("click", toggleEraser);


function togglePen(){
    const canvasSquare = document.querySelectorAll(".square");
    togglePenBTN.style.background = "#ABB0B0";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.onmouseover = () => square.classList.add("squareClicked");
    }
}

const togglePenBTN = document.querySelector("#togglePen");
togglePenBTN.style.background = "#ABB0B0";
togglePenBTN.addEventListener("click", togglePen);
const canvas = document.querySelector("#canvas");
let num = 50;

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

const amountOfSquares = document.querySelector("#amountOfSquares");
amountOfSquares.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        changeSquares();
    }
});

function changeSquares() {
    let num = amountOfSquares.value;

    if (num < 1 || num > 100) {
        return
    }

    canvas.textContent = "";
    for (x = 1; x <= num; x++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (i = 1; i <= num; i++) {
            const canvasSquare = document.createElement("div");
            canvasSquare.classList.add("square");
            if (color.value === "black") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClicked");
            }
            else if (color.value === "blue") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClickedBlue");
            }
            else if (color.value === "red") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClickedRed");
            }
            else if (color.value === "green") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClickedGreen");
            }
            else if (color.value === "orange") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClickedOrange");
            }
            else if (color.value === "yellow") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClickedYellow");
            }
            else if (color.value === "purple") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClickedPurple");
            }
            else if (color.value === "pink") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClickedPink");
            }
            else if (color.value === "brown") {
                canvasSquare.onmouseover = () => canvasSquare.classList.add("squareClickedBrown");
            }
            blackPen.style.background = "#ABB0B0";
            toggleEraserBTN.style.background = "";
            redPen.style.background = "";
            greenPen.style.background = "";
            purplePen.style.background = "";
            brownPen.style.background = "";
            pinkPen.style.background = "";
            bluePen.style.background = "";
            yellowPen.style.background = "";
            orangePen.style.background = "";
            row.appendChild(canvasSquare);
        };
        canvas.appendChild(row);
    };
}

function resetCanvas(){
    const canvasSquare = document.querySelectorAll(".square");
    for (const square of canvasSquare) {
        square.classList.remove("squareClicked");
        square.classList.remove("squareClickedBlue");
        square.classList.remove("squareClickedRed");
        square.classList.remove("squareClickedGreen");
        square.classList.remove("squareClickedOrange");
        square.classList.remove("squareClickedYellow");
        square.classList.remove("squareClickedPurple");
        square.classList.remove("squareClickedPink");
        square.classList.remove("squareClickedBrown");
    }
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetCanvas);

function toggleEraser(){
    const canvasSquare = document.querySelectorAll(".square");
    blackPen.style.background = "";
    toggleEraserBTN.style.background = "#ABB0B0";
    redPen.style.background = "";
    greenPen.style.background = "";
    bluePen.style.background = "";
    purplePen.style.background = ""
    orangePen.style.background = "";
    brownPen.style.background = "";
    pinkPen.style.background = "";
    yellowPen.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
        });
    };
};

const toggleEraserBTN = document.querySelector("#toggleEraser");
toggleEraserBTN.addEventListener("click", toggleEraser);


function togglePen(){
    const canvasSquare = document.querySelectorAll(".square");
    blackPen.style.background = "#ABB0B0";
    toggleEraserBTN.style.background = "";
    redPen.style.background = "";
    greenPen.style.background = "";
    purplePen.style.background = "";
    brownPen.style.background = "";
    pinkPen.style.background = "";
    bluePen.style.background = "";
    yellowPen.style.background = "";
    orangePen.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
            this.classList.add("squareClicked");
        });
    };
};

const blackPen = document.querySelector("#blackPen");
blackPen.style.background = "#ABB0B0";
blackPen.addEventListener("click", togglePen);


function bluePenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    bluePen.style.background = "#ABB0B0";
    redPen.style.background = "";
    blackPen.style.background = "";
    greenPen.style.background = "";
    yellowPen.style.background = "";
    brownPen.style.background = "";
    pinkPen.style.background = "";
    purplePen.style.background = ""
    orangePen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
            this.classList.add("squareClickedBlue");
        });
    };
};


const bluePen = document.querySelector("#bluePen");
bluePen.addEventListener("click", bluePenToggle);


function redPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    redPen.style.background = "#ABB0B0";
    greenPen.style.background = "";
    bluePen.style.background = "";
    blackPen.style.background = "";
    yellowPen.style.background = "";
    purplePen.style.background = ""
    pinkPen.style.background = "";
    brownPen.style.background = "";
    orangePen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
            this.classList.add("squareClickedRed");
        });
    };
};


const redPen = document.querySelector("#redPen");
redPen.addEventListener("click", redPenToggle);



function greenPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    greenPen.style.background = "#ABB0B0";
    redPen.style.background = "";
    bluePen.style.background = "";
    blackPen.style.background = "";
    brownPen.style.background = "";
    purplePen.style.background = ""
    orangePen.style.background = "";
    yellowPen.style.background = "";
    pinkPen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
            this.classList.add("squareClickedGreen");
        });
    };
};


const greenPen = document.querySelector("#greenPen");
greenPen.addEventListener("click", greenPenToggle);


function orangePenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    orangePen.style.background = "#ABB0B0";
    greenPen.style.background = "";
    redPen.style.background = "";
    bluePen.style.background = "";
    blackPen.style.background = "";
    purplePen.style.background = ""
    brownPen.style.background = "";
    yellowPen.style.background = "";
    pinkPen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
            this.classList.add("squareClickedOrange");
        });
    };
};


const orangePen = document.querySelector("#orangePen");
orangePen.addEventListener("click", orangePenToggle);


function yellowPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    yellowPen.style.background = "#ABB0B0";
    orangePen.style.background = "";
    greenPen.style.background = "";
    redPen.style.background = "";
    brownPen.style.background = "";
    purplePen.style.background = ""
    bluePen.style.background = "";
    blackPen.style.background = "";
    pinkPen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
            this.classList.add("squareClickedYellow");
        });
    };
};


const yellowPen = document.querySelector("#yellowPen");
yellowPen.addEventListener("click", yellowPenToggle);


function purplePenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    purplePen.style.background = "#ABB0B0";
    yellowPen.style.background = ""
    pinkPen.style.background = "";
    orangePen.style.background = "";
    greenPen.style.background = "";
    redPen.style.background = "";
    brownPen.style.background = "";
    bluePen.style.background = "";
    blackPen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
            this.classList.add("squareClickedPurple");
        });
    };
};


const purplePen = document.querySelector("#purplePen");
purplePen.addEventListener("click", purplePenToggle);



function pinkPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    pinkPen.style.background = "#ABB0B0";
    brownPen.style.background = "";
    purplePen.style.background = "";
    yellowPen.style.background = ""
    orangePen.style.background = "";
    greenPen.style.background = "";
    redPen.style.background = "";
    bluePen.style.background = "";
    blackPen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedBrown");
            this.classList.remove("squareClickedPurple");
            this.classList.add("squareClickedPink");
        });
    };
};


const pinkPen = document.querySelector("#pinkPen");
pinkPen.addEventListener("click", pinkPenToggle);



function brownPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    brownPen.style.background = "#ABB0B0";
    pinkPen.style.background = "";
    purplePen.style.background = "";
    yellowPen.style.background = ""
    orangePen.style.background = "";
    greenPen.style.background = "";
    redPen.style.background = "";
    bluePen.style.background = "";
    blackPen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.add("squareClickedBrown");
        });
    };
};

function whitePenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
    brownPen.style.background = "";
    pinkPen.style.background = "";
    purplePen.style.background = "";
    yellowPen.style.background = ""
    orangePen.style.background = "";
    greenPen.style.background = "";
    redPen.style.background = "";
    bluePen.style.background = "";
    blackPen.style.background = "";
    toggleEraserBTN.style.background = "";
    for (const square of canvasSquare) {
        square.addEventListener("mouseover", function () {
            this.classList.remove("squareClicked");
            this.classList.remove("squareClickedBlue");
            this.classList.remove("squareClickedRed");
            this.classList.remove("squareClickedGreen");
            this.classList.remove("squareClickedOrange");
            this.classList.remove("squareClickedYellow");
            this.classList.remove("squareClickedPurple");
            this.classList.remove("squareClickedPink");
            this.classList.remove("squareClickedBrown");
        });
    };
};

const brownPen = document.querySelector("#brownPen");
brownPen.addEventListener("click", brownPenToggle);

function selectColor() {
    if (color.value === "black") {
        togglePen();
    }
    else if (color.value === "white") {
        whitePenToggle();
    }
    else if (color.value === "blue") {
        bluePenToggle();
    }
    else if (color.value === "red") {
        redPenToggle();
    }
    else if (color.value === "green") {
        greenPenToggle();
    }
    else if (color.value === "orange") {
        orangePenToggle();
    }
    else if (color.value === "yellow") {
        yellowPenToggle();
    }
    else if (color.value === "purple") {
        purplePenToggle();
    }
    else if (color.value === "pink") {
        pinkPenToggle();
    }
    else if (color.value === "brown") {
        brownPenToggle();
    }
}

const color = document.querySelector("#color");
color.addEventListener("change", selectColor);
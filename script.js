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

function togglePen(){
    const canvasSquare = document.querySelectorAll(".square");
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

function bluePenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
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

function redPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
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

function greenPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
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

function orangePenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
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

function yellowPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
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

function purplePenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
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


function pinkPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
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



function brownPenToggle(){
    const canvasSquare = document.querySelectorAll(".square");
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
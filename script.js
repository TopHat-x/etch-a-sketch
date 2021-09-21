const gridContainer = document.querySelector("#grid-container");
let gridColumn;
let gridSquare;

function createGrid(gridSize){
    for (column = 1; column <= gridSize; column++){
        gridColumn = document.createElement('div');
        gridColumn.className = 'grid-column';
        gridContainer.appendChild(gridColumn);
        for (row = 1; row <= gridSize; row++){
            gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            gridColumn.appendChild(gridSquare);
        }
    }
}

createGrid(16);

const gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", changeBgColor));

function changeBgColor(){
    this.style.backgroundColor = "black";
}

function promptGridSize(){
    console.log("promptGridSize");
    let gridSize = undefined;

    while (typeof gridSize !== "number"){
        gridSize = parseInt(prompt("How many squares per side do you want for the new grid? Between 1-100."));
    }
    
    gridSize = Math.floor(gridSize);

    if (gridSize <= 0){
        createGrid(1);
    }   else if (gridSize >= 100){
        createGrid(100);
    }   else{
        createGrid(gridSize);
    }
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click', () => {promptGridSize()});



const gridContainer = document.querySelector("#grid-container");
let gridColumn;
let gridSquare;

function createGrid(gridSize){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }    

    for (column = 1; column <= gridSize; column++){
        gridColumn = document.createElement('div');
        gridColumn.className = 'grid-column';
        gridContainer.appendChild(gridColumn);
        for (row = 1; row <= gridSize; row++){
            gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            gridSquare.style.backgroundColor = "white";
            gridColumn.appendChild(gridSquare);
        }
    }
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", changeBgColor));
}

createGrid(16);


function changeBgColor(){
    if (this.style.backgroundColor === "white"){
        let r = randomInt(256);
        let g = randomInt(256);
        let b = randomInt(256);
    
        this.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    } else if (this.style.backgroundColor !== "rgb(0, 0, 0)"){
        let rgbValues = getRGBValues(this.style.backgroundColor);
        let r = parseInt(rgbValues[0]);
        let g = parseInt(rgbValues[1]);
        let b = parseInt(rgbValues[2]);

        r = Math.floor(r - 25.5);
        g = Math.floor(g - 25.5);
        b = Math.floor(b - 25.5);

        if (r < 0){
            r = 0;
        }

        if (g < 0){
            g = 0;
        }

        if (b < 0){
            b = 0;
        }

        this.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

function promptGridSize(){
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

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRGBValues(str) {
    let vals = str.substring(str.indexOf('(') +1, str.length -1).split(', ');
    return vals;
  }

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click', () => {promptGridSize()});



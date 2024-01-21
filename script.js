const gridContainer = document.createElement('div');
const btnContainer = document.createElement('div');
const grid = document.createElement('div');
const changeSizeBtn = document.createElement('button');
const cleanBtn = document.createElement('button');
const normalBtn = document.createElement('button');
const rainbowBtn = document.createElement('button');
let gridSize;
const gridWidth = 600;

gridContainer.classList.add('gridContainer');
btnContainer.classList.add('btnContainer');
grid.classList.add('grid');
changeSizeBtn.classList.add('changeSizeBtn');
cleanBtn.classList.add('cleanBtn');
rainbowBtn.classList.add('rainbowBtn');
normalBtn.classList.add('normalBtn');

changeSizeBtn.textContent = "Change size";
cleanBtn.textContent = "Clean";
rainbowBtn.textContent = "Rainbow Mode";
normalBtn.textContent = "Normal Mode";

document.body.appendChild(btnContainer);
document.body.appendChild(gridContainer);
btnContainer.appendChild(changeSizeBtn);
btnContainer.appendChild(normalBtn);
btnContainer.appendChild(rainbowBtn);
btnContainer.appendChild(cleanBtn);
gridContainer.appendChild(grid);

function intial() {
    for (let i = 0; 256 > i; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
        });
    }
    getNormalMode()
    getRandomMode();
    clean();
    changeGrid();
}

function changeGrid() {
    changeSizeBtn.addEventListener('click', () => {
        gridSize = prompt("Enter a number less than or equal to 100.");
        while(gridSize > 100) {
        gridSize = prompt("Enter a number less than or equal to 100.");
    }
        removeGrid()
        makeSquares()
  });
}

function makeSquares() {
    for (let i = 0; gridSize * gridSize > i; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        square.style.width = gridWidth / gridSize + "px";
        square.style.height = gridWidth / gridSize + "px";
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
        });
    }
    
}

function removeGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        grid.removeChild(square);
    });
}

function clean() {
    cleanBtn.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
  });   
}

function getRandomMode() {
    rainbowBtn.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square');
      squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
        });
      });   
    });
}

function getNormalMode() {
    normalBtn.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square');
      squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
        });
      });
    });
}
intial();


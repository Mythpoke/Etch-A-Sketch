const gridContainer = document.createElement('div');
const grid = document.createElement('div');
const button1 = document.createElement('button');
const btnContainer = document.createElement('div');
const button2 = document.createElement('button');
btnContainer.appendChild(button2);
btnContainer.appendChild(button1);
document.body.appendChild(btnContainer);
gridContainer.appendChild(grid);
document.body.appendChild(gridContainer);
button1.className = 'button1';
button2.className = 'button2';
grid.className = 'grid';
gridContainer.className = 'gridContainer';
btnContainer.className = 'btnContainer';
button1.textContent = "Reset";
button2.textContent = "Change Size";

for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.className = 'square';
    grid.appendChild(div); 
    div.addEventListener('mousemove', () => {
        div.style.backgroundColor = 'blue';
    });       
}

button2.addEventListener('click', () => {
    button2 = prompt("Enter a number");
})


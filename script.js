const container = document.createElement('div');
document.body.appendChild(container);
container.className = 'container';

for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.className = 'square';
    container.appendChild(div);        
}